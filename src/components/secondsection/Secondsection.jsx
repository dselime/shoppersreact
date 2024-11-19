import React from 'react';
import styles from './Secondsection.module.css';

const Secondsection = () => {
  return (
    <section className={styles.section}>
     
      <div className={styles.services}>
        <div className={styles.serviceItem}>
          <i className={`${styles.icon} fas fa-shipping-fast`}></i>
          <h3>FREE SHIPPING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
            iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <i className={`${styles.icon} fas fa-undo-alt`}></i>
          <h3>FREE RETURNS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
            iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <i className={`${styles.icon} fas fa-question-circle`}></i>
          <h3>CUSTOMER SUPPORT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
            iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
      </div>


      <div className={styles.collections}>
        <div className={styles.collectionItem}>
          <div
            className={styles.image}
            style={{
              backgroundImage: 'url("https://preview.colorlib.com/theme/shoppers/images/women.jpg")',
            }}
          ></div>
          <div className={styles.textOverlay}>
            <h4>COLLECTIONS</h4>
            <h2>Women</h2>
          </div>
        </div>
        <div className={styles.collectionItem}>
          <div
            className={styles.image}
            style={{
              backgroundImage: 'url("https://preview.colorlib.com/theme/shoppers/images/children.jpg")',
            }}
          ></div>
          <div className={styles.textOverlay}>
            <h4>COLLECTIONS</h4>
            <h2>Children</h2>
          </div>
        </div>
        <div className={styles.collectionItem}>
          <div
            className={styles.image}
            style={{
              backgroundImage: 'url("https://preview.colorlib.com/theme/shoppers/images/men.jpg")',
            }}
          ></div>
          <div className={styles.textOverlay}>
            <h4>COLLECTIONS</h4>
            <h2>Men</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondsection;
