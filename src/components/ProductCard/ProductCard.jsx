import React from "react";
import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 1500);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
        <div className={styles.category}>{product.category}</div>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productDescription}>
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>
        <div className={styles.productFooter}>
          <span className={styles.productPrice}>
            {formatPrice(product.price)}
          </span>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingText}>
              {product.rating?.rate || 4.5}
            </span>
          </div>
        </div>

        <div className={styles.quantityControls}>
          <button
            className={styles.quantityBtn}
            onClick={decrementQuantity}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className={styles.quantityInput}
            aria-label="Quantity"
          />
          <button
            className={styles.quantityBtn}
            onClick={incrementQuantity}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
