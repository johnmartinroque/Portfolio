import React from "react";
import "../css/TechStackCard.css";
function TechStackCard({ title, image, icons }) {
  return (
    <div className="w-full max-w-sm bg-[#F5F7FF] border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 p-5">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 shadow-lg"
          src={image}
          alt={`${title} icon`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>

        <div
          className={`grid mt-4 md:mt-6 w-full gap-7 justify-center ${
            icons.length < 4
              ? "grid-cols-[repeat(auto-fit,minmax(48px,auto))]"
              : "grid-cols-[repeat(auto-fit,minmax(48px,1fr))]"
          }`}
        >
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-sm p-1"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={`w-10 h-10 ${icon.className || ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStackCard;
