import React from "react";
import styles from "./Fifthsection.module.css";

const FifthSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div>
          <h3>Navigations</h3>
          <ul>
            <li>Sell online</li>
            <li>Features</li>
            <li>Shopping cart</li>
            <li>Store builder</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Mobile commerce</li>
            <li>Dropshipping</li>
            <li>Website development</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Point of sale</li>
            <li>Hardware</li>
            <li>Software</li>
          </ul>
        </div>
      </div>

      <div className={styles.promoContainer}>
        <h3>Promo</h3>
        <div className={styles.promoBox}>
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
            alt="Shoes"
            className={styles.image}
          />
        </div>
        <p>Finding Your Perfect Shoes</p>
        <p>Promo from nuary 15 — 25, 2019</p>
      </div>

      <div className={styles.contactContainer}>
        <h3>Contact Info</h3>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        <p>+2 392 3929 210</p>
        <p>emailaddress@domain.com</p>
        <div className={styles.subscribeBox}>
          <h3>Subscribe</h3>
          <input type="text" placeholder="Email" />
          <button>Send</button>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Copyright ©2024 All rights reserved | This template is made with 💜 by Colorlib</p>
      </div>
    </div>
  );
};

export default FifthSection;
