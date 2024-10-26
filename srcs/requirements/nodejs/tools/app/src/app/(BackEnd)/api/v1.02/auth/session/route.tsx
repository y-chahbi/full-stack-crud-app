import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import getClient from '@/app/(BackEnd)/lib/redisClient';

export async function POST(req: Request) {
    const { token } = await req.json();
    const client = await getClient();
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
        const StoredToken = await client.get(decoded as string);

        if (!StoredToken)
            throw  new Error('Token not found');

        return NextResponse.json({ message: "Already logged in", data: decoded }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}
