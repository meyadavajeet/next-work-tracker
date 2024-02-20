"use client";
import React, { useEffect, useState } from "react";
import UserContext from "@/app/context/userContext";
import { currentUser } from "@/services/currentUser";
import { useCookies } from 'next-client-cookies';

const UserProvider = ({ children }) => {
  const cookies = useCookies();
  const [user, setUser] = useState(undefined);

  const token = cookies.get('authToken');
  
  useEffect(() => {
    async function fetchCurrentUser() {
      try {           
        const loggedInUser = await currentUser();
        // console.log("loggedInUser",loggedInUser);
        loggedInUser &&  setUser({ ...loggedInUser });
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current  user" +error);
        setUser(undefined);
      }
    }
    
      console.log(cookies.get('authToken'), "getting token if exist");   
      fetchCurrentUser();
  },[]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
