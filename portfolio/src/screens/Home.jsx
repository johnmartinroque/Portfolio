import React from "react";
import Picture from "../components/others/Picture";
import DeployedProjects from "../components/projects/DeployedProjects";
import PastProject from "../components/projects/PastProject";
import Education from "../components/education/Education";
import AboutMe from "../components/personal/AboutMe";
import TechStack from "../components/skills/TechStack";

function Home() {
  return (
    <div>
      <Picture />
      <AboutMe />
      <Education />
      <TechStack />
      <DeployedProjects />
      <PastProject />
    </div>
  );
}

export default Home;
