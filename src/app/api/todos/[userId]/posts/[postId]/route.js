import { NextResponse } from "next/server";

// localhost:3000/api/users/45/posts/89  == localhost:3000/api/users/[userId]/posts/[postId]
export function GET(request, { params }) {
  const { userId } = params;
  const { postId } = params;
  console.log("userId using dynamic route", userId);
  console.log("postId using dynamic route", postId);
  return NextResponse.json({
    message: "Data found",
    params,
  });
}
