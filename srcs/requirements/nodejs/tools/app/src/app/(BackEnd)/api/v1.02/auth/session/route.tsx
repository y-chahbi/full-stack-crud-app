import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    const { token } = await req.json();
    const jwt_secret =  process.env.JWT_SECRET;
    try {
        if (!jwt_secret)
            throw  new Error('JWT_SECRET is not defined');
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, jwt_secret, (err: any, data: unknown) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

        return NextResponse.json({ message: "Already logged in", data: decoded }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}
