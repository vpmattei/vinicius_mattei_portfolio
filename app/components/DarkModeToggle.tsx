import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial theme on component mount
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      htmlElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      htmlElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
