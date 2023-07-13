import { NextResponse } from "next/server";

// localhost:3000/api/users/45  == localhost:3000/api/users/[userId]
export function DELETE(request, { params }) {
  const { userId } = params;
  console.log("userId using dynamic route", userId);
  return NextResponse.json({
    message: "Data Deleted",
    params,
  });
}
