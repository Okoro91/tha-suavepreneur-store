import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CartItem from "../../components/CartItem/CartItem";

describe("CartItem Component", () => {
  const mockItem = {
    id: 1,
    title: "Test Item",
    price: 100,
    quantity: 2,
    image: "https://fakestoreapi.com/img/1.jpg",
    category: "women's clothing",
  };

  const mockUpdateQuantity = vi.fn();
  const mockRemoveFromCart = vi.fn();

  it("renders cart item correctly", () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeFromCart={mockRemoveFromCart}
      />,
    );

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    expect(screen.getByText("women's clothing")).toBeInTheDocument();
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  it("calls updateQuantity when increment is clicked", () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeFromCart={mockRemoveFromCart}
      />,
    );

    const incrementBtn = screen.getByLabelText("Increase quantity");
    incrementBtn.click();
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });

  it("calls removeFromCart when decrement to zero", () => {
    const singleItem = { ...mockItem, quantity: 1 };
    render(
      <CartItem
        item={singleItem}
        updateQuantity={mockUpdateQuantity}
        removeFromCart={mockRemoveFromCart}
      />,
    );

    const decrementBtn = screen.getByLabelText("Decrease quantity");
    decrementBtn.click();
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });
});
