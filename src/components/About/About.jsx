import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Coffee,
  Code2,
  Heart,
  Zap,
  Download,
  Github,
  Linkedin,
  Mail,
  Loader,
} from "lucide-react";

const About = ({ data }) => {
  const personalStats = [
    {
      icon: Code2,
      label: "Code Reviews",
      value: "Always",
      description: "Best practices committed",
    },
    {
      icon: Zap,
      label: "Problem Solving",
      value: "24/7",
      description: "Love tackling challenges",
    },
    {
      icon: Heart,
      label: "Team Ready",
      value: "100%",
      description: "Collaboration focused",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Ready",
      description: "Eager to contribute",
    },
  ];

  const personalityTraits = [
    "Problem Solver",
    "Team Player",
    "Continuous Learner",
    "Detail-Oriented",
    "Innovation Enthusiast",
    "Clean Code Advocate",
  ];

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async () => {
    setIsDownloading(true);

    try {
      // Simulate processing delay for that premium feel
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Trigger download
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Make sure resume.pdf is in your public folder
      link.download = "MonisKhanResume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="about"
      className="dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-full mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            The story behind the code
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[800px]">
          {/* Main Story Card - Takes 2 columns and 2 rows */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                My Journey in Tech
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {data.about.description}
                </p>

                {/* Location & Experience */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-blue-100/50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                    <MapPin
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {data.about.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-100/50 dark:bg-green-900/30 px-4 py-2 rounded-full">
                    <Calendar
                      size={18}
                      className="text-green-600 dark:text-green-400"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {data.about.experience}
                    </span>
                  </div>
                </div>

                {/* Personality Traits */}
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">
                    What drives me:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalityTraits.map((trait, index) => (
                      <motion.span
                        key={trait}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                      >
                        {trait}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - 4 cards in 2x2 layout */}
          {personalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Fun Fact Card */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Fun Fact
              </h4>
              <p className="text-green-100 text-lg leading-relaxed">
                I debug code better with music on 🎵 and believe the best
                solutions come from the simplest approaches. Currently exploring
                AI/ML to stay ahead of the curve and build smarter applications!
              </p>
            </div>
          </motion.div>

          {/* Download Resume Card */}
          <motion.div
            className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-2xl p-8 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 10 }}
              >
                {isDownloading ? (
                  <Loader className="w-8 h-8 text-white animate-spin" />
                ) : (
                  <Download className="w-8 h-8 text-white" />
                )}
              </motion.div>

              <motion.button
                onClick={downloadResume}
                disabled={isDownloading}
                className="w-full hover:bg-blue-50/50 dark:hover:bg-blue-900/20 rounded-xl p-2 transition-colors disabled:cursor-not-allowed"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {isDownloading
                    ? "Preparing Download..."
                    : "Download My Resume"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  PDF • Updated {new Date().getFullYear()}
                </p>
              </motion.button>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={data.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${data.contact.email}`}
                  className="p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full hover:shadow-lg transition-all shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
