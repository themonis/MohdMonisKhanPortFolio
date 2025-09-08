import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Dark Mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
