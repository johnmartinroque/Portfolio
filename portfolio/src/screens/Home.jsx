import React from "react";
import Introduction from "../components/sections/Introduction";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default Home;
