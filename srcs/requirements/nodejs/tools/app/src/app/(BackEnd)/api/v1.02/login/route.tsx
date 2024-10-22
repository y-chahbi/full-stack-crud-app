// File: pages/api/register.ts
import { NextResponse } from 'next/server';

const usernameRegex = /^[a-z]{8,}$/;
const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const validationErrors: string[] = [];

    if (!usernameRegex.test(username)) {
        validationErrors.push('Username Invalid!.');
    }

    if (!strongPasswordRegex.test(password)) {
        validationErrors.push('Password must be Strong.');
    }

    if (validationErrors.length > 0) {
        return NextResponse.json({ success: false, errors: validationErrors });
    }

    // Here, you would typically handle saving the user to your database

    return NextResponse.json({ success: true, message: "Registration successful!" });
}
