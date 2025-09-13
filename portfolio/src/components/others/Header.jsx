import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return true;
  });

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Check if on ProjectDetailed page
  const isProjectDetailed = location.pathname.startsWith("/project/");

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-[#B7C9E6] border-[#B7C9E6] dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center space-x-6 mx-auto p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-3 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#B7C9E6] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {isProjectDetailed ? (
                // Show only Home when inside ProjectDetailed
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                  >
                    Home
                  </Link>
                </li>
              ) : (
                // Show all menu items for other pages
                <>
                  <li>
                    <a
                      href="#home"
                      className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 px-3 text-white hover:text-gray-200 md:p-0"
                    >
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
