import React from "react";
import Picture from "../components/others/Picture";
import DeployedProjects from "../components/projects/DeployedProjects";
import PastProject from "../components/projects/PastProject";
import Education from "../components/education/Education";
import AboutMe from "../components/personal/AboutMe";
import TechStack from "../components/skills/TechStack";
import Certifications from "../components/education/Certifications";
import Skills from "../components/skills/Skills";

function Home() {
  return (
    <div>
      <Picture />
      <AboutMe />
      <Skills />
      {/*  <Education />*/}
      <TechStack />
      <DeployedProjects />
      <PastProject />
      <Certifications />
    </div>
  );
}

export default Home;
