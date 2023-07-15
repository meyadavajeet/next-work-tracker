import TaskModel from "@/models/task.model";
import { sendResponse } from "@/utils/sendResponse";

// get task by id
export async function GET(request, { params }) {
  try {
    const { taskId } = params;
    const task = await TaskModel.findById({ _id: taskId });
    return sendResponse(true, "", task);
  } catch (error) {
    console.log("error in getting user by id", error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;
    await TaskModel.deleteOne({
      _id: taskId,
    });
    return sendResponse(true, "", "Data deleted !!");
  } catch (error) {
    console.log("error in deleting task", error);
    return sendResponse(false, "", "Error while deleting data!!", 500);
  }
}
