"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/currentUser";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const loggedInUser = await currentUser();
        console.log(loggedInUser, "LoggedInUser");
        setUser({ ...loggedInUser });
      } catch (error) {
        console.log(error);
        toast.error("error in loading current  user" +error);
        setUser(undefined);
      }
    }
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
