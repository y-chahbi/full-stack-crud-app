
import { NextResponse } from 'next/server';
import connection from '../../../lib/db';
import mysql, { MysqlError } from 'mysql2';

import bcrypt from 'bcrypt';



const usernameRegex = /^[a-z]{8,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export async function POST(req: Request) {
  const { username, email, password, accept } = await req.json();

  const validationErrors: string[] = [];

  if (!usernameRegex.test(username)) {
    validationErrors.push('Username Invalid.');
  }

  if (!emailRegex.test(email)) {
    validationErrors.push('Email is not valid.');
  }

  if (!strongPasswordRegex.test(password)) {
    validationErrors.push('Password must be Strong.');
  }

  if (!accept) {
    validationErrors.push('You must accept the terms.');
  }

  if (validationErrors.length > 0) {
    return NextResponse.json({ success: false, errors: validationErrors });
  }
  else {

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
          
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        connection.query(query, [username, email, hashedPassword], (error: MysqlError | null, results?: any) => {
          if (error) {
            console.error(error);
            if (error.code === 'ER_DUP_ENTRY') {
              return new Response(JSON.stringify({ message: 'User already exists' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
              });
            }
            return new Response(JSON.stringify({ message: 'Database error' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            });
          }
          return new Response(JSON.stringify({ id: results.insertId, username, email }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          });
        });
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

  }

  return NextResponse.json({ success: true, message: "Registration successful!" });
}
