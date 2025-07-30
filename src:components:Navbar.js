import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "About Me" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
        <div className="text-xl font-bold text-indigo-600">Dibyadyoti Sarkar</div>
        <div className="space-x-6">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 px-3 py-1 rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
