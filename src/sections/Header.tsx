"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero-section",
        "project-section",
        "about-section",
        "contact-section",
      ];
      const scrollPosition = window.scrollY + 100;

      // Check if user is at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact-section");
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <motion.nav
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <a
          href="#hero-section"
          className={`nav-item ${
            activeSection === "hero-section"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}>
          Home
        </a>
        <a
          href="#project-section"
          className={`nav-item ${
            activeSection === "project-section"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}>
          Projects
        </a>
        <a
          href="#about-section"
          className={`nav-item ${
            activeSection === "about-section"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}>
          About
        </a>
        <a
          href="#contact-section"
          className={`nav-item ${
            activeSection === "contact-section"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}>
          Contact
        </a>
      </motion.nav>
    </div>
  );
};
