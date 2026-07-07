import React from "react";
import { Link, useLocation } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img
            src={
              "https://res.cloudinary.com/okoro91/image/upload/v1783455094/Tha_Suavepreneur/tha_logo.png"
            }
            alt="Tha Suavepreneur Logo"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Tha Suavepreneur</span>
        </Link>
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`${styles.navLink} ${location.pathname === "/shop" ? styles.active : ""}`}
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className={`${styles.navLink} ${location.pathname === "/cart" ? styles.active : ""}`}
          >
            <div className={styles.cartLink}>
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
