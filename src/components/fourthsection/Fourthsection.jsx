import React from "react";
import styles from "./Fourthsection.module.css";

const FourthSection = () => {
  return (
    <section className={styles.fourthSection}>
      <div className={styles.container}>
 
        <div className={styles.imageContainer}>
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" 
            alt="Big Sale"
            className={styles.image}
          />
        </div>

   
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Big Sale!</h2>
          <h3 className={styles.subtitle}>50% less in all items</h3>
          <p className={styles.author}>
            By <span>Carl Smith</span> • September 3, 2018
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            iste dolor accusantium facere corporis ipsum animi deleniti fugiat.
            Ex, veniam?
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
