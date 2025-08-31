import React from "react";
import useInView from "../../hooks/useInView";

function AboutMe() {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`}
      class="h-screen"
    >
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center ">
              About Me
            </h2>
            <p class="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div class=" gap-4 mt-8">
            <div class="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <img
                src="/images/jmpic.jpg"
                alt="image"
                class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
