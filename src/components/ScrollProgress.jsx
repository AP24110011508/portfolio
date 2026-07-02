import React, { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = height > 0 ? (scroll / height) * 100 : 0;
      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressBar}>
      <div className={styles.fill} style={{ width: `${progress}%` }} />
    </div>
  );
}
