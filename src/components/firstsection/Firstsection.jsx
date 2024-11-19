import React from "react";
import styles from "./Firstsection.module.css";

const Firstsection = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Finding Your <br /> Perfect Shoes</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
          <button className={styles.button}>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
