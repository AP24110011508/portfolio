import React from "react";
import styles from "./Footer.module.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { social } = portfolioData;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <p>© 2026 Koya Charan Babu</p>
          <span>Charan Koya | Software Engineer</span>
          <small>Built by Charan Koya</small>
        </div>

        <div className={styles.links}>
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
