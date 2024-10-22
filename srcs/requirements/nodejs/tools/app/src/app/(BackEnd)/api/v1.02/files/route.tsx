import { NextResponse } from "next/server";

interface Delete {
    id : number,
}


export async function GET() {

    const obj = {"hello": "hi"};

    return (
        NextResponse.json({"Hello":"How are you??"})
    );
}

export async function POST() {

}

export async function DELETE(request: Request) {

    const {id} : Delete = await request.json();;

    if (!id)
        return NextResponse.json({"Message" : "Id is required!"});
    return NextResponse.json({"Message" : `Good Job Id ${id} is exiest!`});
}