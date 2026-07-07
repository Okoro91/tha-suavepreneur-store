import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CartItem from "../../components/CartItem/CartItem";

describe("CartItem Component", () => {
  it("renders cart item correctly", () => {
    const mockItem = {
      id: 1,
      title: "Test Item",
      price: 100,
      quantity: 2,
      image: "test.jpg",
      category: "test",
    };

    render(<CartItem item={mockItem} />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });
});
