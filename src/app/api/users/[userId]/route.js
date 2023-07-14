import { connectDB } from "@/config/db.connection";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

connectDB();
// localhost:3000/api/users/45  == localhost:3000/api/users/[userId]
export async function DELETE(request, { params }) {
  // const { userId } = params;
  // console.log("userId using dynamic route", userId);
  // return NextResponse.json({
  //   message: "Data Deleted",
  //   params,
  // });

  try {
    const { userId } = params;
    await UserModel.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      success: true,
      message: "Deleted Successfully",
      data: null,
    });
  } catch (error) {
    console.log("error in deleting user", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!!!",
      data: null,
    });
  }
}

// get user by id
export async function GET(request, { params }) {
  try {
    const { userId } = params;
    const user = await UserModel.findById({ _id: userId });
    return NextResponse.json({
      success: true,
      message: "Result success",
      data: user,
    });
  } catch (error) {
    console.log("error in getting user by id", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!!!",
      data: null,
    });
  }
}
