import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { CartProvider, useCart } from "../../context/CartContext";

function TestComponent() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  return (
    <div>
      <div data-testid="cart-count">{getTotalItems}</div>
      <div data-testid="cart-total">{getTotalPrice}</div>
      <div data-testid="cart-items">{JSON.stringify(cartItems)}</div>
      <button
        onClick={() =>
          addToCart({ id: 1, title: "Test Product", price: 10 }, 2)
        }
        data-testid="add-btn"
      >
        Add Item
      </button>
      <button onClick={() => removeFromCart(1)} data-testid="remove-btn">
        Remove Item
      </button>
      <button onClick={() => updateQuantity(1, 3)} data-testid="update-btn">
        Update Quantity
      </button>
    </div>
  );
}

describe("CartContext", () => {
  beforeEach(() => {});

  it("should initialize with empty cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-items")).toHaveTextContent("[]");
  });

  it("should add items to cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    fireEvent.click(screen.getByTestId("add-btn"));
    expect(screen.getByTestId("cart-count")).toHaveTextContent("2");
    expect(screen.getByTestId("cart-total")).toHaveTextContent("20");
  });

  it("should remove items from cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    fireEvent.click(screen.getByTestId("add-btn"));
    fireEvent.click(screen.getByTestId("remove-btn"));
    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-items")).toHaveTextContent("[]");
  });

  it("should update item quantity", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    fireEvent.click(screen.getByTestId("add-btn"));
    fireEvent.click(screen.getByTestId("update-btn"));
    expect(screen.getByTestId("cart-count")).toHaveTextContent("3");
    expect(screen.getByTestId("cart-total")).toHaveTextContent("30");
  });
});
