import React from "react";

function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="flex flex-wrap w-full items-center justify-evenly flex-col sm:flex-row gap-6">
          {/* Hard Skills Card */}
          <div className="max-w-lg p-10 bg-white border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2 ">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Hard Skills
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>

          {/* Soft Skills Card */}
          <div className="max-w-lg p-10 bg-white border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Soft Skills
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
