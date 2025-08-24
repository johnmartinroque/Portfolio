import React from "react";
import { useNavigate } from "react-router-dom";

function TaskHiveDetailed() {
  const navigate = useNavigate("");
  return (
    <div class="flex flex-col justify-center items-center mt-5 space-y-10">
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        TaskHive
      </h1>

      <img
        class="rounded-full w-96 h-96 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)]"
        src="/images/TaskHive.png"
        alt="image description"
      />

      <div className="flex w-full justify-center items-center flex-col">
        <h2 class="text-4xl font-extrabold dark:text-white">
          Project Overview
        </h2>
        <p className="w-4/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="flex w-full justify-center items-center flex-col">
        <h2 class="text-4xl font-extrabold dark:text-white">Functionalities</h2>
        <ul class="max-w-md space-y-1 text-black list-disc list-inside dark:text-white">
          <li>User authentication (sign up / log in / log out)</li>
          <li>Invite users to join group to-do lists</li>
          <li>Create, update, and delete tasks</li>
          <li>Search for other users</li>
          <li>Real-time group chat</li>
          <li>Responsive UI design</li>
        </ul>
      </div>

      <div className="flex w-full justify-center items-center flex-col">
        <h2 class="text-4xl font-extrabold dark:text-white">Tech Stack</h2>
      </div>

      <div className="flex w-full justify-center items-center flex-col">
        <h2 class="text-4xl font-extrabold dark:text-white">Screenshots</h2>
      </div>

      <button
        onClick={() => navigate("/")}
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        Go Back
      </button>
    </div>
  );
}

export default TaskHiveDetailed;
