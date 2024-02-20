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
  try {
    const result = await httpAxios.post("/api/users", user);
    return result;
  } catch (error) {
    console.log("registerUser", error);
  }
};

export const loginUser = async (user) => {
  try {
    const result = await httpAxios.post("/api/login", user);
    return result;
  } catch (error) {
    console.log("loginUser", error);
  }
};

export const logoutUser = async () => {
  try {
    const result = await httpAxios.post("/api/logout");
    return result;
  } catch (error) {
    console.log("logoutUser",error);
  }
};
