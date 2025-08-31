import React from "react";
import useInView from "../../hooks/useInView";

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
          <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white ">
            TECH STACK
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly w-full space-y-6 sm:space-y-0">
          <div class="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 p-5">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 shadow-lg"
                src="/images/frontend.png"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Front-End
              </h5>
              <div class="flex mt-4 md:mt-6 justify-evenly w-full">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
                  alt="React Router"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="Redux"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-10 h-10"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="TailwindCSS"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
          <div class="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 p-5">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 shadow-lg"
                src="/images/backend.png"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Back-End
              </h5>

              <div class="flex mt-4 md:mt-6 justify-evenly w-full">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                  alt="Express.js"
                  className="w-10 h-10 bg-white rounded"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="Python"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
                  alt="Django"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/djangorest/djangorest-original.svg"
                  alt="Django REST"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
          <div class="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 p-5">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 shadow-lg"
                src="/images/database.png"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Database
              </h5>

              <div class="flex mt-4 md:mt-6 justify-evenly w-full">
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="Firebase"
                  className="w-10 h-10"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
