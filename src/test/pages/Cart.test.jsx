import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import Cart from "../../pages/Cart/Cart";
import { CartProvider, useCart } from "../../context/CartContext";

// Test component to setup cart state
const TestWrapper = ({ children }) => {
  return (
    <MemoryRouter>
      <CartProvider>{children}</CartProvider>
    </MemoryRouter>
  );
};

// Component to pre-populate cart
const PrePopulatedCart = () => {
  const { addToCart } = useCart();
  const product = {
    id: 1,
    title: "Elegant Dress",
    price: 100,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/1.jpg",
    rating: { rate: 4.5 },
  };

  // Add items on render
  React.useEffect(() => {
    addToCart(product, 2);
  }, []);

  return <Cart />;
};

describe("Cart Page", () => {
  it("displays empty cart message when no items", () => {
    render(
      <TestWrapper>
        <Cart />
      </TestWrapper>,
    );

    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
    expect(screen.getByText("Start Shopping")).toBeInTheDocument();
  });

  it("displays cart items when items exist", async () => {
    render(
      <TestWrapper>
        <PrePopulatedCart />
      </TestWrapper>,
    );

    // Wait for items to render
    expect(await screen.findByText("Elegant Dress")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    expect(screen.getByText(/Order Summary/)).toBeInTheDocument();
  });

  it("allows quantity updates", async () => {
    render(
      <TestWrapper>
        <PrePopulatedCart />
      </TestWrapper>,
    );

    // Find and increment quantity
    const incrementBtn = await screen.findByLabelText("Increase quantity");
    fireEvent.click(incrementBtn);

    // Check quantity updated
    const quantityInput = screen.getByDisplayValue("3");
    expect(quantityInput).toBeInTheDocument();
  });

  it("removes item when decrement to zero", async () => {
    render(
      <TestWrapper>
        <PrePopulatedCart />
      </TestWrapper>,
    );

    // Decrement twice to remove item
    const decrementBtn = await screen.findByLabelText("Decrease quantity");
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    // Check empty cart message
    expect(await screen.findByText("Your Cart is Empty")).toBeInTheDocument();
  });

  it("clears all items", async () => {
    render(
      <TestWrapper>
        <PrePopulatedCart />
      </TestWrapper>,
    );

    // Click clear cart
    const clearBtn = await screen.findByText("Clear Cart");
    fireEvent.click(clearBtn);

    // Check empty cart message
    expect(await screen.findByText("Your Cart is Empty")).toBeInTheDocument();
  });
});
