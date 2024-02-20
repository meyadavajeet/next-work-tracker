import { httpAxios } from "@/helper/HttpHelper";

export const currentUser = async () => {
  try {
    const result = await httpAxios.get(`/api/current`);
    return result.data;
  } catch (error) {
    console.log("currentUser", error);
  }

};