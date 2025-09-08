import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import { useState } from "react";
import { useEffect } from "react";
import { portfolioData } from "./data/portfolio";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === null) {
      // First visit - set to light mode
      localStorage.setItem("darkMode", JSON.stringify(false));
      document.documentElement.classList.remove("dark");
    } else {
      const isDark = JSON.parse(savedTheme);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading screen for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen while loading
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen scroll-smooth">
      <CustomCursor />

      <Header />

      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Education></Education>

        <Projects data={portfolioData} />
        <Achievements data={portfolioData}></Achievements>
        <Contact data={portfolioData} />
      </main>

      <Footer data={portfolioData} />

      {/* Floating Contact Button */}
      <FloatingContact data={portfolioData} />
    </div>
  );
}

export default App;
