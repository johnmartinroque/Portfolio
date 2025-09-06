import React from "react";
import ProjectCard from "../../cards/ProjectCard";

function DeployedProjects() {
  const projects = [
    {
      title: "Guessroom",
      role: "Full-Stack",
      image: "/images/guessroom.png",
      demoLink: "https://guessroom.vercel.app",
      detailsRoute: "/project/guessroom",
      link: "https://github.com/Ikawari-s/Guessroom",
      alt: "Guessroom",
    },
    {
      title: "TaskHive",
      role: "Full-Stack",
      image: "/images/TaskHive.png",
      demoLink: "https://taskhive-8b031.web.app",
      detailsRoute: "/project/taskhive",
      link: "https://github.com/Ikawari-s/TaskHive",
      alt: "TaskHive",
    },
    {
      title: "Dishcovery",
      role: "Full-Stack",
      image: "/images/guessroom.png",
      demoLink: "https://dishcovery-theta.vercel.app/",
      detailsRoute: "/project/dishcovery",
      link: "https://github.com/Ikawari-s/Dishcovery",
      alt: "Dishcovery",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-5 px-4">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Deployed Projects
      </h1>
      <div className="flex flex-wrap justify-evenly w-full space-y-6 sm:space-y-0">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            showDemo={true}
            showDetails={true}
          />
        ))}
      </div>
    </div>
  );
}

export default DeployedProjects;
