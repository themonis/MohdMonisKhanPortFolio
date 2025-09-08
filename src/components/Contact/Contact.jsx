import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  MessageCircle,
  Phone,
  Heart,
  Sparkles,
  Loader,
} from "lucide-react";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATED: Real email sending function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending message..." });

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "255ffad9-daac-4d99-b3d2-85a0eae7cef0"); // Get from web3forms.com
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: data?.contact?.email || "your.email@example.com",
      href: `mailto:${data?.contact?.email}`,
      color: "from-red-500 to-pink-500",
      description: "Best way to reach me",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@themonis",
      href: data?.contact?.github,
      color: "from-gray-600 to-gray-800",
      description: "Check out my repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohd-monis-khan",
      href: data?.contact?.linkedin,
      color: "from-blue-500 to-blue-600",
      description: "Let's connect professionally",
    },
    {
      icon: MapPin,
      label: "Location",
      value: data?.about?.location || "India",
      href: "#",
      color: "from-green-500 to-emerald-500",
      description: "Currently based in",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-gray-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's collaborate on your next amazing project
          </motion.p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Intro Card */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Let's start a conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a project in mind or just want
                to chat about tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Location" ? "_blank" : "_self"}
                  rel={item.label !== "Location" ? "noopener noreferrer" : ""}
                  className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-lg`}
                    >
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Send me a message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  y: isSubmitting ? 0 : -2,
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </motion.button>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center space-x-3 ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : status.type === "error"
                      ? "bg-red-100 text-red-800 border border-red-200"
                      : "bg-blue-100 text-blue-800 border border-blue-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : status.type === "error" ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <Loader className="w-5 h-5 animate-spin" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
