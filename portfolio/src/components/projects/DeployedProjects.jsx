import React from "react";
import { Link } from "react-router-dom";

function DeployedProjects() {
  return (
    <div class="flex flex-col justify-center items-center mt-5 p-10">
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        Projects
      </h1>
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        Deployed Projects
      </h1>
      <div class="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg   dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)]">
        <div className="pt-10"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/images/TaskHive.png"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            TaskHive
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="https://taskhive-8b031.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
            >
              Demo
            </a>
            <Link
              to="/taskhivedetailed"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeployedProjects;
