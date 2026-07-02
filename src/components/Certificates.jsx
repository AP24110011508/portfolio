import React from "react";
import { motion } from "framer-motion";
import styles from "./Certificates.module.css";
import { portfolioData } from "../data/portfolio";

export default function Certificates() {
  const { certifications } = portfolioData;

  return (
    <section className={styles.certificates} id="certificates">
      <div className={styles.header}>
        <p>Certifications</p>
        <h2>Professional Credentials</h2>
      </div>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span>{cert.date}</span>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
