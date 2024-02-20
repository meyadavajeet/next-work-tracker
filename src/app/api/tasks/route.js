import TaskModel from "@/models/task.model";
import { NextResponse } from "next/server";
import moment from "moment";
import { sendResponse } from "@/utils/sendResponse";
import JWT from "jsonwebtoken";

const { connectDB } = require("@/config/db.connection");

connectDB();

//create tasks
export async function POST(request) {
  const { title, content, deadlineDate, userId, addedDate } =
    await request.json();
  try {
    // get token from the cookies and set the userId with loggedIn userId
    const authToken = request.cookies.get("authToken")?.value;
    const currentUserDetails = JWT.verify(
      authToken,
      process.env.JWT_SECRET_KEY
    );
    console.log(currentUserDetails);
    const task = new TaskModel({
      title,
      content,
      addedDate: moment(addedDate, "YYYY-MM-DD").toDate(),
      deadlineDate: moment(deadlineDate, "YYYY-MM-DD").toDate(),
      userId: currentUserDetails._id,
    });

    const newTask = await task.save();

    return NextResponse.json(
      {
        success: true,
        message: "Task Created !!",
        data: newTask,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("error in task creation", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Error in task creation !!",
        data: null,
      },
      { status: 500 }
    );
  }
}

// get all task of all users
export async function GET() {
  try {
    const tasks = await TaskModel.find({});
    return sendResponse(true, tasks);
  } catch (error) {
    console.log("Error in get all user function", error);
    return sendResponse(
      true,
      null,
      "Error While fetching data",
      500,
      "INTERNAL SERVER ERROR"
    );
  }
}
