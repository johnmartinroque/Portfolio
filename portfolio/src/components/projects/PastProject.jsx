import React from "react";

function PastProject() {
  const projects = [
    {
      title: "Shareable",
      role: "Full-Stack",
      image: "/images/Shareable.png",
      link: "https://github.com/Ikawari-s/Shareable",
      alt: "Shareable",
    },
    {
      title: "Watchlog",
      role: "Full-Stack",
      image: "/images/watchlog.png",
      detailsRoute: "/taskhivedetailed",
      alt: "TaskHive",
    },
    {
      title: "LeRecipe",
      role: "Full-Stack",
      image: "/images/lerecipepic.png",
      link: "https://github.com/johnmartinroque/LeRecipe",
      alt: "LeRecipe",
    },

    {
      title: "Kapeterium",
      role: "Frontend",
      image: "/images/kapeterium.png",
      link: "https://taskhive-8b031.web.app",
      alt: "Kapeterium",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-5 px-4">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Projects I've worked on
        </h1>
        <div className="flex flex-wrap justify-evenly w-full space-y-6 sm:space-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] hover:bg-gray-200 dark:hover:bg-gray-700"
            >
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
                <div className="flex mt-4 md:mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastProject;
