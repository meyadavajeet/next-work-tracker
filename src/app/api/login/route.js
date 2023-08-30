import { connectDB } from "@/config/db.connection";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

connectDB();

export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    // get user with email
    const user = await UserModel.findOne({
      email: email,
    });
    if (!user) {
      throw new Error("User not found !!");
    }
    // check password
    let isPasswordMatched = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
      throw new Error("Email or Password may be wrong !!");
    }

    // create jwt token
    const token = JWT.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY
    );

    // create nextResponse -- set cookies
    const response = NextResponse.json({
      message: "Login Success !!",
      success: true,
      user: user,
    });

    // -- set cookies
    response.cookies.set("authToken", token, {
      expiresIn: "30d",
      httpOnly: true,
    });
    console.log("user:->", user);
    console.log("token:->", token);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        data: null,
      },
      { status: 500 }
    );
  }
};
