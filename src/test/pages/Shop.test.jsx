import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Shop from "../../pages/Shop/Shop";
import { CartProvider } from "../../context/CartContext";
import { MemoryRouter } from "react-router";

// Mock the API
vi.mock("../../services/api", () => ({
  fetchProducts: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        title: "Elegant Dress",
        price: 100,
        description: "Beautiful modest dress",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/1.jpg",
        rating: { rate: 4.5 },
      },
    ]),
  ),
}));

const renderWithProviders = (component) => {
  return render(
    <MemoryRouter>
      <CartProvider>{component}</CartProvider>
    </MemoryRouter>,
  );
};

describe("Shop Page", () => {
  it("renders shop page with products", async () => {
    renderWithProviders(<Shop />);

    expect(screen.getByText("Loading our collection...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Our Collection")).toBeInTheDocument();
      expect(screen.getByText("Elegant Dress")).toBeInTheDocument();
    });
  });

  it("displays product count", async () => {
    renderWithProviders(<Shop />);

    await waitFor(() => {
      expect(screen.getByText(/pieces available/)).toBeInTheDocument();
    });
  });
});
