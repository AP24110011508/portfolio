import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./Projects.module.css";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <p>Selected Projects</p>
        <h2>Premium Portfolio Work</h2>
        <p>
          Four polished projects built with modern stacks, thoughtful interactions,
          and professional presentation.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12, rotateX: 1.2, rotateY: 1.2, boxShadow: "0 35px 90px rgba(59, 130, 246, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className={styles.cardMedia}>
              <div className={styles.overlay} />
              <div className={styles.cardTag}>{project.featured ? "Featured" : "Project"}</div>
              <div className={styles.mediaTitle}>{project.title}</div>
            </div>

            <div className={styles.cardBody}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.techList}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.actions}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <FiGithub size={18} />
                  GitHub
                </a>
                {project.liveDemo && project.liveDemo !== "#" ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionGhost}
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
