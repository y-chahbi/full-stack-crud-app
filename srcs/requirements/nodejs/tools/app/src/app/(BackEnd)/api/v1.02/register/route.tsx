
import { NextResponse } from 'next/server';

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

  return NextResponse.json({ success: true, message: "Registration successful!" });
}
