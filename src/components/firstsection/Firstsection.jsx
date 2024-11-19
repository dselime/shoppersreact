import React from 'react';
import styles from './Firstsection.module.css';

const Firstsection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Finding Your <br /> Perfect Shoes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          iaculis quam. Integer accumsan tincidunt fringilla.
        </p>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Firstsection;
