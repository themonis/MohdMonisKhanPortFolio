import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  Award,
  Presentation,
  Heart,
  GraduationCap,
  GitBranch,
  Calendar,
  Target,
  ExternalLink,
  Sparkles,
  TrendingUp,
  ArrowRight,
  X,
} from "lucide-react";

const Achievements = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Get achievements from data
  const achievements = data?.achievements || [];

  // Enhanced categories with better organization
  const categories = [
    "All",
    "Leadership & Events",
    "Recognition",
    "Knowledge Sharing",
    "Community Service",
    "Academic",
  ];

  // Category icons mapping
  const categoryIcons = {
    "Leadership & Events": Users,
    Leadership: Users,
    Recognition: Award,
    "Knowledge Sharing": Presentation,
    "Community Service": Heart,
    Community: GitBranch,
    Academic: GraduationCap,
  };

  // Category colors
  const categoryColors = {
    "Leadership & Events": "from-blue-500 to-cyan-500",
    Leadership: "from-purple-500 to-pink-500",
    Recognition: "from-yellow-500 to-orange-500",
    "Knowledge Sharing": "from-green-500 to-emerald-500",
    "Community Service": "from-red-500 to-rose-500",
    Community: "from-indigo-500 to-purple-500",
    Academic: "from-teal-500 to-green-500",
  };

  // Filter achievements
  const getFilteredAchievements = () => {
    if (selectedCategory === "All") return achievements;
    return achievements.filter(
      (achievement) => achievement.category === selectedCategory
    );
  };

  const filteredAchievements = getFilteredAchievements();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="achievements"
      className="dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-emerald-900/10 dark:to-teal-900/10 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 250 + 100,
              height: Math.random() * 250 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-gray-100 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Leadership, community impact, and milestones that define my journey
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: "Events Organized",
              value: "2+",
              icon: Users,
              color: "text-blue-600",
            },
            {
              label: "Students Impacted",
              value: "350+",
              icon: TrendingUp,
              color: "text-green-600",
            },
            {
              label: "Speaking Sessions",
              value: "5+",
              icon: Presentation,
              color: "text-purple-600",
            },
            {
              label: "Community Reach",
              value: "Campus-wide",
              icon: Heart,
              color: "text-red-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30"
              }`}
              whileHover={{
                scale: selectedCategory === category ? 1.05 : 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredAchievements.map((achievement, index) => {
              const IconComponent =
                categoryIcons[achievement.category] || Trophy;
              const colorClass =
                categoryColors[achievement.category] ||
                "from-gray-500 to-gray-700";

              return (
                <motion.div
                  key={achievement.title}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 shadow-xl hover:shadow-2xl transition-all duration-500"
                  onMouseEnter={() => setHoveredAchievement(index)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Achievement Image - FIXED FOR TALL POSTERS */}
                  <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(achievement);
                      }}
                      onError={(e) => {
                        e.target.src = "/images/achievements/placeholder.png";
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Hover Action - FIXED */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={false}
                      animate={{
                        opacity: hoveredAchievement === index ? 1 : 0,
                      }}
                    >
                      <motion.div
                        className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-full font-semibold shadow-lg text-sm cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(achievement);
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Full Size</span>
                      </motion.div>
                    </motion.div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`bg-gradient-to-r ${colorClass} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg`}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {achievement.year}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`p-2 bg-gradient-to-r ${colorClass} rounded-lg shadow-lg`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Achievement Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-sm font-medium bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}
                      >
                        {achievement.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Target className="w-3 h-3 mr-1" />
                        {achievement.impact}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4 line-clamp-3">
                      {achievement.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {achievement.skills?.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Impact Highlight */}
                    <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div
                        className={`flex items-center text-sm bg-gradient-to-r ${colorClass} bg-clip-text text-transparent font-medium`}
                      >
                        <TrendingUp className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>Impact: {achievement.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action - Clean Version */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden text-lg"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <span className="relative z-10">
              Ready to make an impact together?
            </span>
            <motion.div
              className="relative z-10"
              animate={{
                x: [0, 6, 0],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          {/* Optional subtle tagline */}
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Let's connect and build something amazing together
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Full Size Image Modal - COMPLETELY FIXED */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              className="relative max-w-[95vw] max-h-[95vh] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full Size Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              />

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
