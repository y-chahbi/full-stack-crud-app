
import { NextResponse } from 'next/server';
import connection from '../../../../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const usernameRegex = /^[a-z]{6,}$/;
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
        console.log("handel register");
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const queryInsert = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            const queryCheck = 'SELECT * FROM users WHERE username = ? OR email = ?';
            const Newconnection = await connection();
            
            if (!connection) {
                throw new Error("Database connection is not established.");
            }
            
            try {
                
                const [rows]: [any[], any] = await Newconnection.execute(queryCheck, [username, email]);                
                console.log(`size : ${rows.length} : size`);
                if (rows.length > 0) {
                    const user = rows[0];
                    
                    if (user.email == email) {
                        validationErrors.push("email already exiest");
                        return NextResponse.json({ success: false, errors: validationErrors });
                    }
                    if (user.username == username) {
                        validationErrors.push("Username already exiest");
                        return NextResponse.json({ success: false, errors: validationErrors });
                    }
                }
            }
            
            catch (err) {
                validationErrors.push("Error during query execution");
                return NextResponse.json({ success: false, errors: validationErrors });
            }
                
            try {
                const [rows]: [any[], any] = await Newconnection.execute(queryInsert, [username, email, hashedPassword]);
                const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });
                return NextResponse.json({ success: true, message: "Registration successful!", token : token});

                console.log('Query result:', rows);
            }
            catch (err) {
                console.error('Error during query execution:');
            }
            
        }
        catch (error) {
            validationErrors.push("Error hashing password:");
            return NextResponse.json({ success: false, errors: validationErrors });
        }
  }

  return NextResponse.json({ success: true, message: "Registration successful!" });
}
