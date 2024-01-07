import { httpAxios } from "@/helper/HttpHelper";

export const currentUser = async () => {
  const result = await httpAxios.get(`api/current`);
  return result.data;
};