import React from "react";
import useInView from "../../hooks/useInView";
import "../../css/AboutMe.css";

function AboutMe() {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`h-[80vh] flex items-center justify-center ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <section class=" dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center ">
              About Me
            </h2>
            <p class="mb-4">
              I am a 4th-year Computer Engineering student at Holy Angel
              University. I enjoy challenging myself to learn more and become
              better at coding everyday. I am adaptable and can work effectively
              both independently and as part of a collaborative team.
            </p>
          </div>
          <div class=" gap-4 mt-8">
            <div class="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <div class="card">
                <img
                  src="/images/jmpic.jpg"
                  alt="image"
                  class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 animate-pulseGlow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
