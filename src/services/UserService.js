import { httpAxios } from "@/helper/HttpHelper";

// export const registerUser = async (user) => {
//   const result = await httpAxios.post("api/users", user).then((response) => {
//     response.data;
//   });
//   return result;
// };

// export const loginUser = async (user) => {
//   const result = await httpAxios.post("api/login", user).then((response) => {
//     response.data;
//   });
//   return result;
// };

export const registerUser = async (user) => {
  const result = await httpAxios.post("api/users", user);
  return result;
};

export const loginUser = async (user) => {
  const result = await httpAxios.post("api/login", user);
  return result;
};

export const logoutUser = async () => {
  const result = await httpAxios.post("api/logout");
  return result;
};
