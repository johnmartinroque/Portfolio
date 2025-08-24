import React from "react";

function AboutMe() {
  return (
    <div class="flex flex-col justify-center items-center mt-5 ">
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        ABOUT ME
      </h1>
      <figure class="max-w-lg">
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/jmpic.jpg"
          alt="image description"
        />
        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          Me
        </figcaption>
      </figure>
    </div>
  );
}

export default AboutMe;
