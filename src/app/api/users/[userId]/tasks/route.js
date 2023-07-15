// http://localhost:3000/api/users/[userId]/tasks

import { connectDB } from "@/config/db.connection";
import TaskModel from "@/models/task.model";
import { sendResponse } from "@/utils/sendResponse";

connectDB();

// get all task of a particular user
export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    const tasks = await TaskModel.find({
      userId: userId,
    });
    return sendResponse(true, tasks);
  } catch (error) {
    console.log("Error while getting user tasks", error.message);
    return sendResponse(
      false,
      "",
      `Error while deleting data!!=> ${error.message}`,
      500
    );
  }
};
