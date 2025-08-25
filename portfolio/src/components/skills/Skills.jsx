import React from "react";

function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="flex flex-wrap w-full items-center justify-evenly flex-col sm:flex-row gap-6">
          {/* Hard Skills Card */}
          <div className="max-w-2xl p-10 bg-white border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2 ">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              Hard Skills
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-100">
              <li>
                I am proficient in building dynamic front-end applications using
                React, React Router, and Redux for state management.
              </li>
              <li>
                I have experiences in JavaScript (ES6+) and utilize modern CSS
                frameworks like Bootstrap and TailwindCSS to create responsive,
                visually appealing user interfaces.
              </li>
              <li>
                I use Firebase for real-time databases and authentication,
                enabling seamless backend integration for web applications.
              </li>
              <li>
                I build and maintain RESTful APIs with Django and Django REST
                Framework, integrating Python backend services with front-end
                clients.
              </li>
              <li>
                I utilize Git and GitHub for version control and collaborative
                development, ensuring code integrity and smooth team workflows.
              </li>
            </ul>
          </div>

          {/* Soft Skills Card */}
          <div className="max-w-2xl p-10 bg-white border border-gray-200 rounded-lg shadow-[0_4px_6px_rgba(0.5,0.5,0.5,0.5)] dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
              Soft Skills
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-100 ">
              <li>
                I have strong problem-solving skills, enabling me to debug,
                troubleshoot, and optimize code efficiently.
              </li>
              <li>
                I communicate technical concepts clearly to both technical and
                non-technical stakeholders, facilitating effective collaboration
                with team members.
              </li>
              <li>
                I manage my time well by prioritizing tasks to consistently meet
                deadlines, even in fast-paced environments.
              </li>
              <li>
                I work effectively in cross-functional teams, collaborating
                closely with designers, project managers, and other developers.
              </li>
              <li>
                I am adaptable and always willing to learn new technologies,
                allowing me to adjust smoothly to changing project requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
