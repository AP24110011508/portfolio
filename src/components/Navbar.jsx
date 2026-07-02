import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "skills", "experience", "projects", "certificates", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom > 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.a
          href="#home"
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick("#home")}
        >
          Charan Koya
        </motion.a>

        {/* Desktop Menu */}
        <ul className={styles.links}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}
