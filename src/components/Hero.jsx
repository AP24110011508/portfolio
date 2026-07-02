import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiExternalLink, FiDownload } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import styles from "./Hero.module.css";
import { portfolioData } from "../data/portfolio";
import profile from "../profile.JPG";

export default function Hero() {
  const { hero, social, personal } = portfolioData;
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = hero.roles[roleIndex];
    const delay = isDeleting ? 50 : 80;

    if (charIndex <= currentRole.length && !isDeleting) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (charIndex === currentRole.length && !isDeleting) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % hero.roles.length);
    }
  }, [charIndex, roleIndex, isDeleting, hero.roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: { y: [-10, 10], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={itemVariants}>
            👋 {hero.greeting}
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {personal.name}
          </motion.h1>

          <motion.div className={styles.roleContainer} variants={itemVariants}>
            <h2 className={styles.role}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </h2>
          </motion.div>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {hero.tagline}
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            {hero.description}
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={itemVariants}>
            <motion.a
              href="#projects"
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Download resume - ${personal.name}`}
              aria-label={`Download resume of ${personal.name}`}
              className={`${styles.btn} ${styles.btnSecondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className={`${styles.btn} ${styles.btnGhost}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnSecondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={18} />
              GitHub
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnSecondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin size={18} />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div className={styles.stats} variants={itemVariants}>
            {hero.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className={styles.stat}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.socialMobile} variants={itemVariants}>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <FiGithub size={20} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={20} />
            </a>
            <a href={social.leetcode} target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div className={styles.profileCard} variants={floatVariants} initial="initial" animate="animate">
            <div className={styles.glowBorder} />

            <div className={styles.imageContainer}>
              <img src={profile} alt={personal.name} className={styles.profileImage} />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.cardContent}>
              <h3>{personal.name}</h3>
              <p className={styles.title}>{personal.title}</p>

              <div className={styles.techIcons}>
                <span className={styles.icon}><span>⚛️</span></span>
                <span className={styles.icon}><span>🟢</span></span>
                <span className={styles.icon}><span>🗄️</span></span>
                <span className={styles.icon}><span>🎨</span></span>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge}>Full Stack</span>
                <span className={styles.badge}>AI/ML</span>
                <span className={styles.badge}>React</span>
              </div>

              <div className={styles.socialLinks}>
                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href={social.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown size={24} />
      </motion.div>
    </section>
  );
}
