import React from "react";
import { motion } from "framer-motion";
import styles from "./Timeline.module.css";
import { portfolioData } from "../data/portfolio";

export default function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section className={styles.timeline} id="timeline">
      <div className={styles.header}>
        <p>Timeline</p>
        <h2>Milestones</h2>
      </div>

      <div className={styles.line} />
      <div className={styles.items}>
        {timeline.map((event, index) => (
          <motion.div
            key={`${event.year}-${index}`}
            className={styles.item}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.yearBadge}>
              <span>{event.year}</span>
            </div>
            <div className={styles.card}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
