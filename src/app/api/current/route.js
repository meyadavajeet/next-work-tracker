import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { connectDB } from "@/config/db.connection";

connectDB();
export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  if(authToken){
    console.log(authToken);

    const data = JWT.verify(authToken, process.env.JWT_SECRET_KEY);
    console.log(data);
    const user = await UserModel.findById(data._id).select("-password");
    return NextResponse.json(user);
  }else{
    console.log("Authorization token not provided!!!");
  }

}
