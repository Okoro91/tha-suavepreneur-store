import { Minus, Plus, Trash2 } from "lucide-react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 1500);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      updateQuantity(item.id, value);
    }
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemCategory}>{item.category}</p>
        <div className={styles.itemPrice}>{formatPrice(item.price)}</div>
      </div>

      <div className={styles.itemControls}>
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
            value={item.quantity}
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

        <button
          className={styles.removeBtn}
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>

      <div className={styles.itemTotal}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalPrice}>
          {formatPrice(item.price * item.quantity)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
