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
    >
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class=" gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="/images/jmpic.jpg"
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
