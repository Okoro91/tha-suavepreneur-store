import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../pages/Home/Home";

describe("Home Page", () => {
  it("renders the home page with brand name", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to Tha Suavepreneur")).toBeInTheDocument();
    expect(screen.getByText(/Modest Outfits/)).toBeInTheDocument();
    expect(screen.getByText(/Lagos, Nigeria/)).toBeInTheDocument();
  });
});
