import { connectDB } from "@/config/db.connection";
import { NextResponse } from "next/server";

connectDB();

export function GET() {
  const userData = [
    {
      name: "ajeet yadav",
      post: "Software developer",
      course: "Nodejs",
    },
    {
      name: "sonu yadav",
      post: "react developer",
      course: "Nodejs",
    },
    {
      name: "sujit yadav",
      post: "node developer",
      course: "Nodejs",
    },
  ];

  return NextResponse.json(
    {
      success: true,
      message: "data found successfully",
      data: userData,
    },
    {
      status: 200,
      statusText: "success",
    }
  );
}

// for post route use request for getting data from client
export async function POST(request) {
  const jsonRequestData = await request.json();
  const method = request.method;
  // console.log(request.headers);
  // console.log(request.cookies);
  console.log(request.nextUrl.pathname);
  console.log(request.nextUrl.searchParams);

  return NextResponse.json({
    jsonRequestData,
    message: "Example of post method",
    requestMethod: method,
  });
}

export function DELETE() {
  return NextResponse.json(
    {
      success: true,
      message: "Data deleted Successfully",
      data: null,
    },
    {
      status: 200,
      statusText: "success",
    }
  );
}
