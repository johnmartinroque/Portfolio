import React from "react";

function PastProject() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-5 px-4">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Projects I've worked on
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Project 1 */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)]">
            <div className="pt-10"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/images/Shareable.png"
                alt="TaskHive"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Shareable
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://github.com/Ikawari-s/Shareable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)]">
            <div className="pt-10"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/images/TaskHive.png"
                alt="TaskHive"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                LeRecipe
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://github.com/johnmartinroque/LeRecipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)]">
            <div className="pt-10"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/images/TaskHive.png"
                alt="TaskHive"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                TaskHive
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://taskhive-8b031.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastProject;
