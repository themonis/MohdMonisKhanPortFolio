import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
  Mail,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: data?.contact?.github,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: data?.contact?.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: `mailto:${data?.contact?.email}`,
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: BsWhatsapp,
      href: data?.contact?.whatsapp
        ? `https://wa.me/${data.contact.whatsapp.replace(/[^\d]/g, "")}`
        : "#",
      label: "Whatsapp",
      color: " hover:text-green-600",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Projects", href: "projects" },
    { name: "Achievements", href: "achievements" }, // Fixed: lowercase
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Personal Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {data?.name || "Your Name"}
                </h3>
                <p className="text-gray-400 text-sm">
                  {data?.title || "Full-Stack Developer"}
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building secure and scalable web applications with passion and
              precision.
            </p>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">Back to top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700/50 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Made with love section */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span>by {data?.name}</span>
          </motion.div>

          {/* Tech stack */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Powered by</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Coffee className="w-4 h-4 text-amber-400" />
            </motion.div>
            <span>and MERN Stack</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2025 {data?.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
