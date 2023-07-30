"use client";
import React, { useState } from "react";
import AddTaskImage from "../../../public/images/add-task.svg";
import backgroundImage from "../../../public/images/bg-1.jpg";
import Image from "next/image";

const metadata = {
  title: "Add Task - Work Manager",
};
const AddTask = () => {
  // define state for getting all field values assign default empty string
  const [task, setTask] = useState({
    title: "",
    content: "",
    addedDate: "",
    deadlineDate: "",
    status: "",
    userId: "",
  });
  return (
    <>
      <div
        style={{
          //   backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg")`,
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
                Add Task
              </h2>
              <hr />

              <div className="mt-4">
                <form method="post" action="#!">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    {/* <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div> */}

                    <div className="md:mt-20">
                      <Image src={AddTaskImage} alt="add-task" />
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="title">Title</label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setTask({
                                ...task,
                                title: event.target.value,
                              });
                            }}
                            value={task.title}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="content">Content</label>
                          <textarea
                            name="content"
                            id="content"
                            className="border mt-1 rounded px-4 w-full bg-gray-100"
                            rows={5}
                            onChange={(event) => {
                              setTask({
                                ...task,
                                content: event.target.value,
                              });
                            }}
                            value={task.content}
                          ></textarea>
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="addedDate">Created Date</label>
                          <input
                            type="date"
                            name="addedDate"
                            id="addedDate"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setTask({
                                ...task,
                                addedDate: event.target.value,
                              });
                            }}
                            value={task.addedDate}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="deadlineDate">Deadline Date</label>
                          <input
                            type="date"
                            name="deadlineDate"
                            id="deadlineDate"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setTask({
                                ...task,
                                deadlineDate: event.target.value,
                              });
                            }}
                            value={task.deadlineDate}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="status">Completion Status</label>
                          <select
                            type="date"
                            name="status"
                            id="status"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                            onChange={(event) => {
                              setTask({
                                ...task,
                                status: event.target.value,
                              });
                            }}
                            value={task.status}
                          >
                            <option value="" disabled>
                              --- Select ---
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                        <div className="md:col-span-5">
                          <div className=" text-center">
                            <div className="inline-flex items-end">
                              <button className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                Save Task
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* {JSON.stringify(task)} */}
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

export default AddTask;
