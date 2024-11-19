import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
        <div className={styles.logo}>SHOPPERS</div>
        <div className={styles.icons}>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-heart"></i>
          <div className={styles.cart}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={styles.cartCount}>2</span>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
      
          <li className={styles.menuItem}>
            HOME <i className="fa-solid fa-caret-down"></i>
            <ul className={styles.subMenu}>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
              <li className={styles.subMenuItem}>
                Sub Menu <i className="fa-solid fa-caret-right"></i>
                <ul className={styles.subSubMenu}>
                  <li>Menu One</li>
                  <li>Menu Two</li>
                  <li>Menu Three</li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li className={styles.menuItem}>
            ABOUT <i className="fa-solid fa-caret-down"></i>
            <ul className={styles.subMenu}>
              <li>Menu One</li>
              <li>Menu Two</li>
              <li>Menu Three</li>
            </ul>
          </li>
          <li>SHOP</li>
          <li>CATALOGUE</li>
          <li>NEW ARRIVALS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
