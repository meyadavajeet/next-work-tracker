import TaskModel from "@/models/task.model";
import { NextResponse } from "next/server";
import moment from "moment";

const { connectDB } = require("@/config/db.connection");

connectDB();

//create tasks
export async function POST(request) {
  const { title, content, deadlineDate, userId, addedDate } =
    await request.json();
  try {
    const task = new TaskModel({
      title,
      content,
      addedDate: moment(addedDate, "YYYY-MM-DD").toDate(),
      deadlineDate: moment(deadlineDate, "YYYY-MM-DD").toDate(),
      userId,
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
export async function GET() {}
