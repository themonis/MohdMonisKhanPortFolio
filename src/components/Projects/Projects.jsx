import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Code,
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  X,
  Star,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  InfoIcon,
  BookOpen,
  Play,
} from "lucide-react";

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = data?.projects || [];
  const categories = ["All", "Full-Stack", "Cybersecurity", "Frontend"];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-emerald-900/10 dark:to-teal-900/10 py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Building secure, scalable applications with modern technologies
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105"
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30"
              }`}
              whileHover={{
                scale: selectedCategory === category ? 1.05 : 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-emerald-300/50 dark:hover:border-emerald-500/50 ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.status === "Completed" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {project.status}
                  </span>
                </div>

                {/* Super Long Version - Maximum Image Display */}
                <div className="relative h-80 sm:h-96 lg:h-[28rem] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    onError={(e) => {
                      e.target.src = "/images/projects/placeholder.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/30 px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* ENHANCED PROJECT ACTIONS - NO LIVE DEMO VERSION */}
                  <div className="space-y-4">
                    {/* Quick Links Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* GitHub Link - More Prominent */}
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Source Code
                        </motion.a>

                        {/* Status Indicator */}
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </motion.a>
                        ) : (
                          <span className="flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                            <Clock className="w-4 h-4 mr-1" />
                            In Development
                          </span>
                        )}
                      </div>
                    </div>

                    {/* SUPER ATTRACTIVE EXPLORE BUTTON */}
                    <motion.button
                      className="group/btn w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white py-3 px-6 rounded-xl font-bold text-sm shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 relative overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                      {/* Button Content */}
                      <div className="relative flex items-center justify-center space-x-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="p-1 bg-white/20 rounded-full"
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                        <span className="text-lg font-bold tracking-wide">
                          Explore Project Details
                        </span>
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: 0.5,
                          }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Pulsing Border Effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/30 animate-pulse"></div>
                    </motion.button>

                    {/* Teaser Text */}
                    <motion.p
                      className="text-center text-xs text-gray-500 dark:text-gray-400 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      ✨ Click to see detailed highlights, tech stack & setup
                      guide
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-r from-emerald-500 to-teal-500 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-4 mb-2">
                    {selectedProject.featured && (
                      <span className="bg-yellow-500 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 max-h-96 overflow-y-auto">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Project Status Section - FOR PROJECTS WITHOUT LIVE DEMO */}
                {!selectedProject.liveUrl || selectedProject.liveUrl === "#" ? (
                  <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                      <InfoIcon className="w-5 h-5 mr-2" />
                      Project Status
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      This project is currently in local development. You can
                      explore the complete source code, setup instructions, and
                      technical documentation on GitHub.
                    </p>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Run Section - FOR PROJECTS WITHOUT LIVE DEMO */}
                {!selectedProject.liveUrl || selectedProject.liveUrl === "#" ? (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      🚀 How to Run Locally
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-200 block">
                        git clone {selectedProject.githubUrl}
                        <br />
                        npm install
                        <br />
                        npm start
                      </code>
                    </div>
                  </div>
                ) : null}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Enhanced for No Live Demo */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveUrl &&
                  selectedProject.liveUrl !== "#" ? (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Demo
                    </motion.a>
                  ) : null}

                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Explore Source Code
                  </motion.a>

                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    onClick={() =>
                      window.open(
                        `${selectedProject.githubUrl}#readme`,
                        "_blank"
                      )
                    }
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Documentation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
