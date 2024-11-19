import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
    
        <div className={styles.left}>
          <i className="fas fa-search"></i>
          <span className={styles.searchText}>Search</span>
        </div>

        <div className={styles.center}>
          <div className={styles.logo}>SHOPPERS</div>
        </div>

      
        <div className={styles.right}>
          <i className={`fas fa-user ${styles.icon}`}></i>
          <i className={`fas fa-heart ${styles.icon}`}></i>
          <div className={styles.cart}>
            <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
            <span className={styles.cartCount}>2</span>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>

   
      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <ul className={styles.menu}>

          <li
            className={styles.menuItem}
            onMouseEnter={() => toggleMenu("home")}
            onMouseLeave={() => toggleMenu(null)}
          >
            HOME <span className={styles.caret}>▼</span>
            {openMenu === "home" && (
              <ul className={styles.dropdown}>
                <li>Menu One</li>
                <li>Menu Two</li>
                <li>Menu Three</li>
                <li
                  className={styles.submenu}
                  onMouseEnter={() => toggleMenu("subMenu")}
                  onMouseLeave={() => toggleMenu(null)}
                >
                  Sub Menu
                  <span className={styles.caret}>▶</span>
                  {openMenu === "subMenu" && (
                    <ul className={styles.dropdown}>
                      <li>Menu One</li>
                      <li>Menu Two</li>
                      <li>Menu Three</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

         
          <li
            className={styles.menuItem}
            onMouseEnter={() => toggleMenu("about")}
            onMouseLeave={() => toggleMenu(null)}
          >
            ABOUT <span className={styles.caret}>▼</span>
            {openMenu === "about" && (
              <ul className={styles.dropdown}>
                <li>Menu One</li>
                <li>Menu Two</li>
                <li>Menu Three</li>
              </ul>
            )}
          </li>

          <li className={styles.menuItem}>SHOP</li>
          <li className={styles.menuItem}>CATALOGUE</li>
          <li className={styles.menuItem}>NEW ARRIVALS</li>
          <li className={styles.menuItem}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
