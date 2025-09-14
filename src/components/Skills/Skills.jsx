import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  ToolCaseIcon,
  Shield,
  Code2,
  Star,
  ChevronRight,
  Zap,
} from "lucide-react";

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: data?.skills?.frontend || [],
      color: "blue",
      bgColor: "from-blue-500 to-cyan-500",
      description: "Creating beautiful, interactive user interfaces",
    },
    {
      title: "Backend",
      icon: Server,
      skills: data?.skills?.backend || [],
      color: "green",
      bgColor: "from-green-500 to-emerald-500",
      description: "Building robust server-side applications",
    },
    {
      title: "Tools & DevOps",
      icon: ToolCaseIcon,
      skills: data?.skills?.tools || [],
      color: "purple",
      bgColor: "from-purple-500 to-violet-500",
      description: "Development tools and deployment workflows",
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: data?.skills?.cybersecurity || [],
      color: "red",
      bgColor: "from-red-500 to-pink-500",
      description: "Security practices and ethical hacking",
    },
    {
      title: "Programming",
      icon: Code2,
      skills: data?.skills?.programming || [],
      color: "orange",
      bgColor: "from-orange-500 to-yellow-500",
      description: "Core programming languages and algorithms",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technologies and expertise I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.bgColor} text-white shadow-2xl scale-105`
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 hover:scale-102"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
              {activeCategory === index && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Category Header */}
            <motion.div
              className={`bg-gradient-to-r ${skillCategories[activeCategory].bgColor} rounded-3xl p-8 mb-8 text-white text-center shadow-2xl`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="p-4 bg-white/20 rounded-2xl backdrop-blur-md"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {React.createElement(skillCategories[activeCategory].icon, {
                    className: "w-12 h-12",
                  })}
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-white/90 text-lg">
                {skillCategories[activeCategory].description}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[activeCategory].skills.map(
                (skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    custom={skillIndex}
                    variants={skillVariants}
                    className="group"
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div
                      className={`
                    flex items-center justify-between p-4 rounded-xl 
                    bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg
                    border border-white/40 dark:border-gray-700/40
                    shadow-lg hover:shadow-xl
                    transition-all duration-300 cursor-pointer
                    hover:bg-gradient-to-r hover:${skillCategories[activeCategory].bgColor} hover:text-white
                    group-hover:border-transparent
                  `}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].bgColor} shadow-lg`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="font-medium group-hover:text-white transition-colors dark:text-gray-300">
                          {skill}
                        </span>
                      </div>

                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Skills Count */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gray-500 dark:text-gray-400">
                {skillCategories[activeCategory].skills.length} technologies
                mastered
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See My Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
