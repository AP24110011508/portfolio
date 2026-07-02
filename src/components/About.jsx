import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { about, education, personal } = portfolioData;

  return (
    <section className={styles.about} id="about">
      <div className={styles.header}>
        <p>About Me</p>
        <h2>Professional Profile</h2>
      </div>

      <div className={styles.grid}>
        <motion.div
          className={styles.story}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{about.summary}</p>
          <p>{about.objective}</p>

          <div className={styles.tags}>
            {about.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>

          <div className={styles.contactBlurb}>
            <h3>Availability</h3>
            <p>{personal.availability}</p>
          </div>
        </motion.div>

        <div className={styles.side}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span>Education</span>
            {education.map((item) => (
              <div key={item.institution} className={styles.eduItem}>
                <div className={styles.eduMeta}>
                  <h4>{item.degree}</h4>
                  <span>{item.duration}</span>
                </div>
                <p className={styles.eduSchool}>{item.institution}</p>
                {item.gpa && <p className={styles.eduInfo}>CGPA: {item.gpa}</p>}
                {item.percentage && <p className={styles.eduInfo}>Percentage: {item.percentage}</p>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
