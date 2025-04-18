import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to LensAI 📸</h1>
      <p className={styles.subtitle}>
        Analyze and enhance your photos with the power of AI!
      </p>
      <button className={styles.cta}>Get Started</button>
    </div>
  );
};

export default HomePage;
