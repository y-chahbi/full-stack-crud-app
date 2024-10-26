import { NextResponse } from 'next/server';
import verifyToken from '../../../lib/middleware';


export async function POST(req: Request, res:  Response) {
    const verifyTokenVar = verifyToken(req);
    if (verifyTokenVar.status != 200) {
        return NextResponse.json({ success: false,  messages : verifyTokenVar.message});
    }
    return NextResponse.json({ success: true,  messages : "Done"});
};