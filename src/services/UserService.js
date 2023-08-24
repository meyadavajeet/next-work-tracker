import { httpAxios } from "@/helper/HttpHelper";

export const registerUser = async (task) => {
  const result = await httpAxios.post("api/users", task).then((response) => {
    response.data;
  });
  return result;
};
