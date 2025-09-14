import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

// Typewriter Component
const TypewriterText = ({ text, delay = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

// Floating Shapes Component
const FloatingShapes = () => {
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Social Links Component
const SocialLinks = ({ data }) => {
  const socialLinks = [
    { icon: Github, href: data.contact.github, label: "GitHub" },
    { icon: Linkedin, href: data.contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${data.contact.email}`, label: "Email" },
  ];

  return (
    <motion.div
      className="flex space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : "_self"}
          rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-700 hover:text-blue-600 hover:bg-white/20 transition-all duration-300 dark:text-blue-500"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 + index * 0.1 }}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

const Hero = ({ data }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 overflow-hidden dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 "
    >
      {/* Animated Background */}
      <FloatingShapes />

      {/* Subtle parallax background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-md border border-white/30 rounded-full text-gray-600 font-medium shadow-lg dark:text-gray-100">
            👋 Welcome to my portfolio
          </span>
        </motion.div>
        {/* Main Heading with Typewriter */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight dark:text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hi, I'm{" "}
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
          >
            <TypewriterText text={data.name} delay={100} />
          </motion.div>
        </motion.h1>
        {/* Subtitle with Animation */}
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 dark:text-gray-100"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {data.title}
        </motion.h2>
        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {data.tagline}
        </motion.p>

        {/* Status Badge */}
        <motion.div
          className="flex justify-center mb-8 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-lg border border-green-200/50 dark:border-green-700/50 px-6 py-3 rounded-full shadow-lg">
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-green-800 dark:text-green-200 font-medium">
              🚀 Available for opportunities
            </span>
          </div>
        </motion.div>
        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:text-gray-100"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="group px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 dark:text-gray-100"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </motion.a>

          <motion.a
            href="/MonisKhanResume.pdf" // Add your resume file to public folder
            download
            className="group px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
        {/* Social Links */}
        <SocialLinks data={data} />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-500 cursor-pointer dark:text-gray-100"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
