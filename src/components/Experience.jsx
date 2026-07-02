import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.header}>
        <p>Experience</p>
        <h2>Industry Internship</h2>
        <p>Hands-on work with immersive AR/VR experiences and professional software development practices.</p>
      </div>

      <div className={styles.cards}>
        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.cardTop}>
              <span>{item.duration}</span>
              <h3>{item.position}</h3>
            </div>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.description}>{item.description}</p>

            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
