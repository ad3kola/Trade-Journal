import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const res = await request.json()
  return NextResponse.json({ message: "This is the GET response", data: {res} });
}

export async function POST(request: NextRequest) {
  const response = await request.json();
  console.log("Submittted data, ", response);
  return NextResponse.json({ response });
}
