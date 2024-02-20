import { httpAxios } from "@/helper/HttpHelper";

export const addTask = async (task) => {
  try {
    const result = await httpAxios.post("/api/tasks", task);
    return result;
  } catch (error) {
    console.log("addTask", error);
  }

};
