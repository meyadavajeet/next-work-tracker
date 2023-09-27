import { httpAxios } from "@/helper/HttpHelper";

export const registerUser = async (user) => {
  const result = await httpAxios.post("api/users", user).then((response) => {
    response.data;
  });
  return result;
};

export const loginUser = async (user) => {
  const result = await httpAxios.post("api/login", user).then((response) => {
    response.data;
  });
  return result;
};

// export const currentUser = async () => {
//   try {
//     const response = await httpAxios.get("api/current");
//     return response.data;
//   } catch (error) {
//     // Handle errors here
//     console.error("Error in currentUser:", error);
//     throw error; // Re-throw the error if needed
//   }
// };

export const currentUser = async () => {
  const result = await httpAxios.get("api/current");
  return result.data;
};

export const logoutUser = async () => {
  const result = await httpAxios.post("api/logout");
  return result.data;
};
