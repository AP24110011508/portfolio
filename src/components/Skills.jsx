import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { portfolioData } from "../data/portfolio";

const categories = [
  { key: "languages", label: "Programming Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
  { key: "core", label: "Core Subjects" },
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <p>Skills</p>
        <h2>Technical Expertise</h2>
        <p>Modern stacks, backend tools, and core engineering fundamentals used to build polished applications.</p>
      </div>

      <div className={styles.grid}>
        {categories.map(({ key, label }) => (
          <motion.div
            key={key}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{label}</h3>
            <div className={styles.skillList}>
              {skills[key].map((item) => (
                <div key={item.name} className={styles.skillItem}>
                  <div className={styles.skillTop}>
                    <span>{item.name}</span>
                    <strong>{item.level}%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
