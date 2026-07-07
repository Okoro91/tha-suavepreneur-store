import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Navbar from "../../components/Navbar/Navbar";
import { CartProvider } from "../../context/CartContext";

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <CartProvider>{component}</CartProvider>
    </BrowserRouter>,
  );
};

describe("Navbar Component", () => {
  it("renders all navigation links", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Tha Suavepreneur")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
