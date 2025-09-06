import React from "react";
import { Link } from "react-router-dom";
import "../css/Button.css";
function ProjectCard({ project, showDemo, showDetails }) {
  return (
    <div className="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] hover:bg-gray-200 dark:hover:bg-gray-700">
      <div className="pt-10"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={project.image}
          alt={project.alt}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Role: {project.role}
        </span>
        <div className="flex mt-4 md:mt-6 space-x-2">
          {showDemo && project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Demo
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Repository
            </a>
          )}
          {showDetails && project.detailsRoute && (
            <Link
              to={project.detailsRoute}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => {
                sessionStorage.setItem("scrollPos", window.scrollY);
              }}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
