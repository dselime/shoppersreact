
import React, { useEffect, useState } from "react";
import styles from "./Thirdsection.module.css";
import axios from "axios";

const Thirdsection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=3")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Məlumat yüklənərkən xəta baş verdi:", error);
      });
  }, []);

  return (
    <section className={styles.thirdSection}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <span className={styles.productPrice}>${product.price}</span>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className={styles.navButton}>←</button>
        <button className={styles.navButton}>→</button>
      </div>
    </section>
  );
};

export default Thirdsection;
