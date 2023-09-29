import { httpAxios } from "@/helper/HttpHelper";

export const addTask = async (task) => {
  const result = await httpAxios.post("api/tasks", task);
  return result;
};
