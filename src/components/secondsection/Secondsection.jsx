import React from "react";
import styles from "./Secondsection.module.css";

const Secondsection = () => {
  return (
    <section className={styles.secondSection}>
     
      <div className={styles.features}>
        <div className={styles.feature}>
          <i className={`${styles.icon} fas fa-truck`}></i>
          <div>
            <h3>FREE SHIPPING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <i className={`${styles.icon} fas fa-sync-alt`}></i>
          <div>
            <h3>FREE RETURNS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <i className={`${styles.icon} fas fa-question-circle`}></i>
          <div>
            <h3>CUSTOMER SUPPORT</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
      </div>

     
      <div className={styles.collections}>
        <div className={styles.collection}>
          <div
            className={styles.image}
            style={{ backgroundImage: "url('https://preview.colorlib.com/theme/shoppers/images/women.jpg')" }}
          >
            <div className={styles.overlay}>
              <p>COLLECTIONS</p>
              <h3>Women</h3>
            </div>
          </div>
        </div>
        <div className={styles.collection}>
          <div
            className={styles.image}
            style={{ backgroundImage: "url('https://preview.colorlib.com/theme/shoppers/images/children.jpg')" }}
          >
            <div className={styles.overlay}>
              <p>COLLECTIONS</p>
              <h3>Children</h3>
            </div>
          </div>
        </div>
        <div className={styles.collection}>
          <div
            className={styles.image}
            style={{ backgroundImage: "url('https://preview.colorlib.com/theme/shoppers/images/men.jpg')" }}
          >
            <div className={styles.overlay}>
              <p>COLLECTIONS</p>
              <h3>Men</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondsection;
