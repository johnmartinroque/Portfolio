import React, { useEffect } from "react";
import Introduction from "../components/sections/Introduction";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "./Contact";

function Home() {
  useEffect(() => {
    const scrollPos = sessionStorage.getItem("scrollPos");
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos));
      sessionStorage.removeItem("scrollPos");
    }
  }, []);
  return (
    <div>
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />

      <Contact />
    </div>
  );
}

export default Home;
