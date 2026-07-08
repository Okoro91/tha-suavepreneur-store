import { Crown, Scissors, Ruler, Sparkles, ArrowRight } from "lucide-react";
import styles from "./Home.module.css";

const Home = () => {
  const heroImage =
    "https://res.cloudinary.com/okoro91/image/upload/v1783431309/Tha_Suavepreneur/IMG_20260623_074241_396.jpg";
  const featureImages = [
    "https://res.cloudinary.com/okoro91/image/upload/v1783431247/Tha_Suavepreneur/IMG_20260404_151951_569.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431140/Tha_Suavepreneur/IMG_20260208_103203_218.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431059/Tha_Suavepreneur/IMG_20251020_120912_863.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431213/Tha_Suavepreneur/IMG_20251212_103855_852.jpg",
  ];
  const galleryImages = [
    "https://res.cloudinary.com/okoro91/image/upload/v1783431073/Tha_Suavepreneur/IMG_20251003_064737_654.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431082/Tha_Suavepreneur/IMG_20251024_112149_328.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431140/Tha_Suavepreneur/IMG_20251222_215409_437.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431325/Tha_Suavepreneur/IMG_20260623_075756_619.jpg",
  ];

  const serviceImages = [
    "https://res.cloudinary.com/okoro91/image/upload/v1783431015/Tha_Suavepreneur/IMG_20241128_114727_448.jpg",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431042/Tha_Suavepreneur/IMG_20250314_083700_872.jpg",
    "https://res.cloudinary.com/okoro91/image/upload/v1783431129/Tha_Suavepreneur/IMG_20260128_111714_332.jpg",
  ];

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroBadge}>BESPOKE TAILORING</p>
            <h1 className={styles.title}>
              <span className={styles.goldText}>Tha Suavepreneur</span>
            </h1>
            <p className={styles.subtitle}>
              Modest Outfits | Made to Measure | Tailoring Brand
            </p>
            <p className={styles.location}>Lagos, Nigeria</p>
            <div className={styles.cta}>
              <a
                href="https://wa.me/2348060548457"
                className={styles.whatsappBtn}
              >
                Book Your Consultation <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImage} alt="Elegant modest fashion" />
          </div>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>
          Why Choose <span className={styles.goldText}>Us</span>
        </h2>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <img src={featureImages[0]} alt="Premium Craftsmanship" />
              <div className={styles.featureOverlay}>
                <Crown className={styles.featureIcon} size={32} />
              </div>
            </div>
            <h3>Premium Craftsmanship</h3>
            <p>
              Expertly tailored modest outfits with attention to every detail
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <img src={featureImages[1]} alt="Made to Measure" />
              <div className={styles.featureOverlay}>
                <Scissors className={styles.featureIcon} size={32} />
              </div>
            </div>
            <h3>Made to Measure</h3>
            <p>Custom fitting for the perfect silhouette and comfort</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <img src={featureImages[2]} alt="Precision Tailoring" />
              <div className={styles.featureOverlay}>
                <Ruler className={styles.featureIcon} size={32} />
              </div>
            </div>
            <h3>Precision Tailoring</h3>
            <p>Professional measurements ensuring flawless fit every time</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <img src={featureImages[3]} alt="Elegant Designs" />
              <div className={styles.featureOverlay}>
                <Sparkles className={styles.featureIcon} size={32} />
              </div>
            </div>
            <h3>Elegant Designs</h3>
            <p>Classy and sophisticated modest fashion for the modern woman</p>
          </div>
        </div>
      </div>

      <div className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>
          Our <span className={styles.goldText}>Collections</span>
        </h2>
        <p className={styles.gallerySubtitle}>
          Explore our curated selection of elegant modest outfits
        </p>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <img src={galleryImages[0]} alt="Bridal Collection" />
            <div className={styles.galleryOverlay}>
              <h4>Bridal Collection</h4>
              <p>Elegant wedding attire</p>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <img src={galleryImages[1]} alt="Corporate Wear" />
            <div className={styles.galleryOverlay}>
              <h4>Corporate Wear</h4>
              <p>Professional sophistication</p>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <img src={galleryImages[2]} alt="Traditional Attire" />
            <div className={styles.galleryOverlay}>
              <h4>Traditional Attire</h4>
              <p>Cultural elegance</p>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <img src={galleryImages[3]} alt="Occasion Wear" />
            <div className={styles.galleryOverlay}>
              <h4>Occasion Wear (Asó Ébi)</h4>
              <p>Special moments</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              Our Tailoring <span className={styles.goldText}>Excellence</span>
            </h2>
            <p>
              At Tha Suavepreneur, we specialize in creating bespoke modest
              outfits that blend traditional elegance with contemporary style.
              Each piece is meticulously crafted to enhance your natural grace
              and confidence.
            </p>
            <div className={styles.services}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceImageWrapper}>
                  <img src={serviceImages[0]} alt="Bridal Collections" />
                </div>
                <h4>Bridal Collections</h4>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceImageWrapper}>
                  <img src={serviceImages[1]} alt="Corporate Wear" />
                </div>
                <h4>Corporate Wear</h4>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceImageWrapper}>
                  <img src={serviceImages[2]} alt="Traditional Attire" />
                </div>
                <h4>Traditional Attire</h4>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceImageWrapper}>
                  <img src={serviceImages[3]} alt="Occasion Wear" />
                </div>
                <h4>Occasion Wear (Asó Ébi)</h4>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600"
              alt="Tailoring excellence"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
