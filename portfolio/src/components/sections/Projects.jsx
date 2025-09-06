import React from "react";
import useInView from "../../hooks/useInView";
import DeployedProjects from "../projects/DeployedProjects";
import PastProject from "../projects/PastProject";

function Projects() {
  const [ref, isVisible] = useInView({
    threshold: 0.2, // triggers when 20% is visible
  });

  return (
    <div ref={ref}>
      <section
        className={`transition-all duration-1000 ${
          isVisible ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center">
          Projects
        </h1>
        <DeployedProjects />
        <PastProject />
      </section>
    </div>
  );
}

export default Projects;
