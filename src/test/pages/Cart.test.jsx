import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cart from "../../pages/Cart/Cart";

describe("Cart Page", () => {
  it("renders the cart page with empty message", () => {
    render(<Cart />);
    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
