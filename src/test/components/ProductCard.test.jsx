import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CartProvider } from "../../context/CartContext";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "Test description",
  category: "test",
  image: "test.jpg",
  rating: { rate: 4.5 },
};

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <CartProvider>{component}</CartProvider>
    </BrowserRouter>,
  );
};

describe("ProductCard Component", () => {
  it("renders product details", () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("displays quantity controls", () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    expect(screen.getByLabelText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });
});
