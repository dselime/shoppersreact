import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Thirdsection.module.css";

const Thirdsection = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=3") 
      .then((response) => {
        setProducts(response.data.products); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.image}
            />
            <h3 className={styles.name}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thirdsection;
