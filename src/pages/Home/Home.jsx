import { Crown, Scissors, Ruler, Sparkles } from "lucide-react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.goldText}>Tha Suavepreneur</span>
        </h1>
        <p className={styles.subtitle}>
          Modest Outfits | Made to Measure | Tailoring Brand
        </p>
        <p className={styles.location}>Lagos, Nigeria</p>
        <div className={styles.cta}>
          <a href="https://wa.me/2348060548457" className={styles.whatsappBtn}>
            Book Your Consultation
          </a>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <Crown className={styles.featureIcon} size={40} />
          <h3>Premium Craftsmanship</h3>
          <p>Expertly tailored modest outfits with attention to every detail</p>
        </div>
        <div className={styles.featureCard}>
          <Scissors className={styles.featureIcon} size={40} />
          <h3>Made to Measure</h3>
          <p>Custom fitting for the perfect silhouette and comfort</p>
        </div>
        <div className={styles.featureCard}>
          <Ruler className={styles.featureIcon} size={40} />
          <h3>Precision Tailoring</h3>
          <p>Professional measurements ensuring flawless fit every time</p>
        </div>
        <div className={styles.featureCard}>
          <Sparkles className={styles.featureIcon} size={40} />
          <h3>Elegant Designs</h3>
          <p>Classy and sophisticated modest fashion for the modern woman</p>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>Our Tailoring Excellence</h2>
        <p className={styles.aboutText}>
          At Tha Suavepreneur, we specialize in creating bespoke modest outfits
          that blend traditional elegance with contemporary style. Each piece is
          meticulously crafted to enhance your natural grace and confidence.
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>👗</span>
            <h4>Bridal Collections</h4>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>👔</span>
            <h4>Corporate Wear</h4>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>👘</span>
            <h4>Traditional Attire</h4>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>💃</span>
            <h4>Occasion Wear</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
