import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        ABOUT ME
      </h1>
      <figure className="max-w-lg overflow-hidden rounded-lg">
        <img
          className="h-auto max-w-full rounded-lg transition-all duration-300 hover:scale-110"
          src="/images/jmpic.jpg"
          alt="image description"
        />
      </figure>
    </div>
  );
}

export default AboutMe;
