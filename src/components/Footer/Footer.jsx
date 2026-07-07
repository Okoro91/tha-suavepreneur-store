import { Link } from "react-router";
import {
  //   FaInstagram,
  //   Twitter,
  //   FaFacebook,
  Mail,
  Phone,
  MapPin,
  Crown,
  Scissors,
  Ruler,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerBrand}>
            <span className={styles.goldText}>Tha Suavepreneur</span>
          </h3>
          <p className={styles.brandDescription}>
            Modest Outfits | Made to Measure | Tailoring Brand
          </p>
          <p className={styles.brandLocation}>Lagos, Nigeria</p>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/tha_suavepreneur"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/" className={styles.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={styles.footerLink}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.footerLink}>
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Our Services</h4>
          <ul className={styles.footerLinks}>
            <li>
              <span className={styles.serviceIcon}>
                <Crown size={16} />
              </span>
              Bespoke Tailoring
            </li>
            <li>
              <span className={styles.serviceIcon}>
                <Scissors size={16} />
              </span>
              Made to Measure
            </li>
            <li>
              <span className={styles.serviceIcon}>
                <Ruler size={16} />
              </span>
              Precision Fitting
            </li>
            <li>
              <span className={styles.serviceIcon}>👗</span>
              Bridal Collections
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <div className={styles.contactInfo}>
            <a
              href="https://wa.me/2348060548457"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Phone size={18} />
              <span>+234 806 054 8457</span>
            </a>
            <a
              href="mailto:info@thasuavepreneur.com"
              className={styles.contactLink}
            >
              <Mail size={18} />
              <span>info@thasuavepreneur.com</span>
            </a>
            <div className={styles.contactLink}>
              <MapPin size={18} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear} Tha Suavepreneur. All rights reserved.
          </p>
          <p className={styles.credit}>
            Crafted with <span className={styles.heart}>❤</span> by{" "}
            <a
              href="https://github.com/Okoro91"
              target="_blank"
              rel="noopener noreferrer"
            >
              mi okoro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
