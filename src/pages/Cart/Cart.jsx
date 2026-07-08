import React from "react";
import { Link } from "react-router";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const totalItems = getTotalItems;
  const totalPrice = getTotalPrice;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 1500);
  };

  const handleQuantityChange = (productId, value) => {
    const newQuantity = parseInt(value);
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const incrementQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrementQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <ShoppingBag size={80} className={styles.emptyIcon} />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/shop" className={styles.shopBtn}>
          <ArrowLeft size={20} />
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.goldText}>Your Cart</span>
        </h1>
        <div className={styles.headerActions}>
          <button className={styles.clearBtn} onClick={clearCart}>
            <Trash2 size={18} />
            Clear Cart
          </button>
        </div>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>

          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}>
              <span>Items ({totalItems})</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery</span>
              <span className={styles.freeDelivery}>Free</span>
            </div>
            <div className={styles.summaryDivider}></div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.grandTotal}>
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          <button className={styles.checkoutBtn}>
            <CreditCard size={20} />
            Proceed to Checkout
          </button>

          <Link to="/shop" className={styles.continueShopping}>
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
