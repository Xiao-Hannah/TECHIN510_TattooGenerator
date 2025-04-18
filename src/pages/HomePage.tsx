import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to LineCraft!</h1>
      <p className={styles.subtitle}>
      Bring your tattoo vision to life in seconds. Our AI-powered tattoo generator turns your ideas or reference images into stunning, personalized designs. Whether you're exploring your first ink or looking for fresh inspiration, preview your custom tattoo, download it, and make it real — all in one intuitive, stylish platform.
      </p>
      <button className={styles.cta}>Get Started</button>
    </div>
  );
};

export default HomePage;
