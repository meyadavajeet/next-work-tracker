"use client";
import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-1.jpg";
import SignUpImage from "../../../public/images/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { loginUser } from "@/services/UserService";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handleFormSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    console.log(user);
    // validate your data
    try {
      await loginUser(user);
      toast.success(" Login Success !!!", { position: "top-right" });
      resetForm();
      router.push("/profile/user");
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong !!!" + error.response.data.message, {
        position: "top-right",
      });
    }
  };

  const resetForm = () => {
    setUser({
      email: "",
      password: "",
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
                Login
              </h2>
              <hr />

              <div className="mt-4">
                <form method="post" action="#!" onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="md:mt-1">
                      <Image
                        className="h-40"
                        src={SignUpImage}
                        alt="login-image"
                      />
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
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
                          <div className=" text-center">
                            <div className="inline-flex items-end">
                              <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                                Login
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

export default Login;
