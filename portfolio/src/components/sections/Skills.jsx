import React from "react";
import useInView from "../../hooks/useInView";
import TechStackCard from "../../cards/TechStackCard";

function Skills() {
  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <section
        className={`py-24 transition-all duration-1000 ${
          isVisible ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <div className="mb-14 text-center">
          <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            TECH STACK
          </h1>
        </div>

        <div className="flex flex-wrap justify-evenly w-full space-y-6 sm:space-y-0 gap-6">
          {/* Front-End */}
          <TechStackCard
            title="Front-End"
            image="/images/frontend.png"
            icons={[
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                alt: "React",
              },
              {
                src: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
                alt: "TypeScript",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
                alt: "Redux",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                alt: "JavaScript",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                alt: "HTML5",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                alt: "CSS3",
              },
              {
                src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                alt: "TailwindCSS",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                alt: "Bootstrap",
              },
            ]}
          />

          {/* Back-End */}
          <TechStackCard
            title="Back-End"
            image="/images/backend.png"
            icons={[
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
                alt: "Node.js",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
                alt: "Express.js",
                className: "bg-white rounded",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                alt: "Python",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
                alt: "Django",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/djangorest/djangorest-original.svg",
                alt: "Django REST",
              },
            ]}
          />

          {/* Database */}
          <TechStackCard
            title="Database"
            image="/images/database.png"
            icons={[
              {
                src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
                alt: "Firebase",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
                alt: "MongoDB",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
