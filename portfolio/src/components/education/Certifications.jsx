import React from "react";

function Certifications() {
  return (
    <div class="flex flex-col justify-center items-center mt-5 p-10">
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center pt-5">
        CERTIFICATIONS
      </h1>
      <div className="w-full max-w-6xl p-10 bg-[#F5F7FF] border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] hover:bg-gray-200 dark:hover:bg-gray-700">
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside dark:text-gray-100 text-xl pl-10 pr-10 ">
          <li>IT Essentials - Cisco Networking Academy (August 10, 2023)</li>
          <li>CCNA: Introduction to Networks (December 20, 2023)</li>
          <li>
            CCNA: Switching, Routing, and Wireless Essentials (June 27, 2024)
          </li>
          <li>
            CCNA: Enterprise Networking, Security, and Automation (November 21,
            2024)
          </li>
          <li>Cyber Threat Management (March 19, 2025)</li>
          <li>Networking Basics (July 3, 2025)</li>
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
