import React from "react";
import ProjectCard from "../../cards/ProjectCard";

function PastProject() {
  const projects = [
    {
      title: "Shareable",
      role: "Full-Stack",
      image: "/images/Shareable.png",
      link: "https://github.com/Ikawari-s/Shareable",
      detailsRoute: "/project/shareable",
      alt: "Shareable",
    },
    {
      title: "Watchlog",
      role: "Full-Stack",
      image: "/images/watchlog.png",
      link: "https://github.com/johnmartinroque/Watchlog",
      detailsRoute: "/project/watchlog",
      alt: "Watchlog",
    },
    {
      title: "LeRecipe",
      role: "Full-Stack",
      image: "/images/lerecipepic.png",
      link: "https://github.com/johnmartinroque/LeRecipe",
      detailsRoute: "/project/lerecipe",
      alt: "LeRecipe",
    },
    {
      title: "Kapeterium",
      role: "Frontend",
      image: "/images/kapeterium.png",
      link: "https://github.com/Ikawari-s/Kapeterium",
      detailsRoute: "/project/kapeterium",
      alt: "Kapeterium",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-5 px-4">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Projects I've worked on
      </h1>
      <div className="flex flex-wrap justify-evenly w-full space-y-6 sm:space-y-0">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            showDemo={false}
            showDetails={true}
          />
        ))}
      </div>
    </div>
  );
}

export default PastProject;
