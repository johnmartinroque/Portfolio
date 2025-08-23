import React from "react";
import Picture from "../components/others/Picture";
import DeployedProjects from "../components/projects/DeployedProjects";
import PastProject from "../components/projects/PastProject";

function Home() {
  return (
    <div>
      <Picture />
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        Projects
      </h1>
      <DeployedProjects />
      <PastProject />
    </div>
  );
}

export default Home;
