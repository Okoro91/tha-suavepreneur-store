import React from "react";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Loader2 } from "lucide-react";
import styles from "./Shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();

        setProducts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again.");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Loader2 className={styles.loader} size={48} />
        <p>Loading our collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>{error}</p>
        <button
          className={styles.retryBtn}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.goldText}>Our Collection</span>
        </h1>
        <p className={styles.subtitle}>
          Discover our curated selection of elegant modest outfits
        </p>
        <p className={styles.productCount}>
          {products.length} pieces available
        </p>
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
