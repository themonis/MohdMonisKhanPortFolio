import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Plus, X } from "lucide-react";

const FloatingContact = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Safe access to data with fallbacks
  const contactOptions = [
    {
      icon: Mail,
      href: `mailto:${data?.contact?.email || "your.email@example.com"}`,
      label: "Email",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Linkedin,
      href: data?.contact?.linkedin || "#",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      href: data?.contact?.github || "#",
      label: "GitHub",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.6, x: 50, y: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  option.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                className={`group flex items-center justify-center w-12 h-12 bg-gradient-to-r ${option.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <option.icon size={20} />

                {/* Mini tooltip */}
                <span className="absolute top-1/2 right-full mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  {option.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-500 flex items-center justify-center border border-white/20"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>

        {/* Pulse effect when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default FloatingContact;
