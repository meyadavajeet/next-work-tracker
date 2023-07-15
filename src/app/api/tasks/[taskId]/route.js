import { connectDB } from "@/config/db.connection";
import TaskModel from "@/models/task.model";
import { sendResponse } from "@/utils/sendResponse";
import moment from "moment";

connectDB();
// get task by id
export async function GET(request, { params }) {
  try {
    const { taskId } = params;
    const task = await TaskModel.findById({ _id: taskId });
    return sendResponse(true, "", task);
  } catch (error) {
    console.log("error in getting user by id", error);
    return sendResponse(false, "", "Error while deleting data!!", 500);
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

//update task
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;
    const { title, content, deadlineDate, addedDate, status } =
      await request.json();
    let task = await TaskModel.findById({ _id: taskId });
    console.log("task available in db", task);
    task.title = title;
    task.content = content;
    task.status = status;
    task.addedDate = addedDate && moment(addedDate, "YYYY-MM-DD").toDate();
    task.deadlineDate =
      deadlineDate && moment(deadlineDate, "YYYY-MM-DD").toDate();

    console.log(task);
    const updatedTask = await task.save();
    return sendResponse(true, "Task Updated Successfully!!!", updatedTask);
  } catch (error) {
    console.log(error);
    return sendResponse(
      false,
      "",
      `Error while updating task ${error.message}`,
      500
    );
  }
}
