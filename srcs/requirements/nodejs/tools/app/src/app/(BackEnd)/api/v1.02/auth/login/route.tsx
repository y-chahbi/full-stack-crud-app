import { NextResponse } from 'next/server';
import connection from '../../../../lib/db';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const usernameRegex = /^[a-z]{6,}$/;
const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export async function POST(req: Request, res:  Response) {

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
    else {

        try {
            const CheckUser = 'SELECT * FROM users WHERE username = ?';
            
            if (!connection) {
                throw new Error("Database connection is not established.");
            }
            
            try {
                const Newconnection = await connection();
                
                const [rows]: [any[], any] = await Newconnection.execute(CheckUser, [username]);

                if (rows.length > 0) {
                    const user = rows[0];
                    const match = await bcrypt.compare(password, user.password);
                    
                    if (match) {
                        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
                            expiresIn: '1h',
                        });
                        return NextResponse.json({ success: true, message: "Login successful!", token: token});
                    } else {
                        validationErrors.push("Invalid password");
                        return NextResponse.json({ success: false, errors: validationErrors });
                    }
                } else {
                    validationErrors.push("User not found");
                    return NextResponse.json({ success: false, errors: validationErrors });
                }
            }
            
            catch (err) {
                validationErrors.push("Error during query execution");
                return NextResponse.json({ success: false, errors: validationErrors });
            }
            
        }
        catch (error) {
            validationErrors.push("Error hashing password");
            return NextResponse.json({ success: false, errors: validationErrors });
        }
    }
}
