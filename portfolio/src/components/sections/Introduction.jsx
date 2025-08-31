import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Introduction() {
  const name = "Hello! My name is John Martin L. Roque";
  const words = name.split("  "); // split into words

  return (
    <div>
      <section class="bg-center bg-no-repeat bg-cover h-[85vh] bg-[url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D')] bg-gray-700 bg-blend-multiply  ">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="text-5xl font-extrabold text-white">
            <Typewriter
              words={["Hello! My name is John Martin L. Roque"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>

          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            I am a passionate full stack web developer dedicated to building
            functional, responsive, and user-centric applications. I aim to
            create efficient and effective solutions that connect front-end
            design with back-end functionality to solve real-world problems
            through code.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/file/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Hire me pls
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
