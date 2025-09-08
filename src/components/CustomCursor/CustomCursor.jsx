import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const activateCursor = () => setIsActive(true);
    const deactivateCursor = () => setIsActive(false);

    const addHoverEffect = () => setIsHovering(true);
    const removeHoverEffect = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", activateCursor);
    document.addEventListener("mouseup", deactivateCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, .cursor-pointer"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addHoverEffect);
      element.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", activateCursor);
      document.removeEventListener("mouseup", deactivateCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHoverEffect);
        element.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
        animate={{
          scale: isActive ? 0.8 : isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full transition-all duration-200 ${
            isActive
              ? "bg-red-500"
              : isHovering
              ? "bg-blue-400 opacity-30"
              : "bg-purple-500"
          }`}
        />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-multiply"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isActive ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
