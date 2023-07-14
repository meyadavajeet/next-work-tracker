import { connectDB } from "@/config/db.connection";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  /*
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
	*/

  try {
    const users = await UserModel.find({}).select("-password");
    return NextResponse.json(
      {
        success: true,
        message: "data found successfully",
        data: users,
      },
      {
        status: 200,
        statusText: "success",
      }
    );
  } catch (error) {
    console.log("error in getting user", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong!!!",
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}

// for post route use request for getting data from client
// create user
export async function POST(request) {
  // const jsonRequestData = await request.json();
  // const method = request.method;
  // console.log(request.headers);
  // console.log(request.cookies);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);

  try {
    const { name, email, password, about, imageURL } = await request.json();

    const user = new UserModel({
      name,
      email,
      password,
      about,
      imageURL,
    });
    const newUser = await user.save();

    return NextResponse.json({
      success: true,
      message: "Success!!!",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "failed to create",
        data: null,
      },
      { status: 500 }
    );
  }
}
