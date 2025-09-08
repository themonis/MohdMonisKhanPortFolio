// src/components/Education/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Matches your other sections */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic foundation in computer science and cybersecurity
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          {portfolioData.education?.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <motion.div
                      className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  <h4 className="text-lg lg:text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.institution}
                  </h4>
                </div>

                <div className="flex flex-col space-y-2 mt-4 lg:mt-0 lg:text-right">
                  <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {edu.description}
              </motion.p>

              {/* Achievements Section */}
              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-purple-500 mr-2" />
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h5>
                  </div>
                  <div className="space-y-3">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Relevant Courses */}
              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Relevant Coursework
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {edu.relevantCourses.map((course, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 text-center border border-blue-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-gray-500 transition-colors"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 15px rgba(59, 130, 246, 0.15)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {course}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
