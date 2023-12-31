"use client";
import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-1.jpg";
import SignUpImage from "../../../public/images/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { registerUser } from "@/services/UserService";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    imageURL: "https://i.stack.imgur.com/l60Hf.png",
  });

  // handleFormSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    // console.log(user);
    // validate your data
    try {
      await registerUser(user);
      toast.success("Registration Success !!!", { position: "top-right" });
      resetForm();
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong !!!" + error.response.data.message, {
        position: "top-right",
      });
    }
  };

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid h-screen place-items-center">
          <div className="container max-w-screen-lg mx-auto ">
            <div className="bg-slate-300 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <h2 className="font-semibold text-xl text-gray-950 text-center">
                Register
              </h2>
              <hr />

              <div className="mt-4">
                <form method="post" action="#!" onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="md:mt-10">
                      <Image src={SignUpImage} alt="add-task" />
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setUser({
                                ...user,
                                name: event.target.value,
                              });
                            }}
                            value={user.name}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="user_email">Email</label>
                          <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setUser({
                                ...user,
                                email: event.target.value,
                              });
                            }}
                            value={user.email}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="user_password">Password</label>
                          <input
                            type="password"
                            name="user_password"
                            id="user_password"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setUser({
                                ...user,
                                password: event.target.value,
                              });
                            }}
                            value={user.password}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="user_about">About</label>
                          <textarea
                            name="user_about"
                            id="user_about"
                            rows={8}
                            className="border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setUser({
                                ...user,
                                about: event.target.value,
                              });
                            }}
                            value={user.about}
                          ></textarea>
                        </div>

                        <div className="md:col-span-5">
                          <div className=" text-center">
                            <div className="inline-flex items-end">
                              <button className="bg-green-900 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* {JSON.stringify(user)} */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
