import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Home from "../../pages/Home/Home";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Home Page", () => {
  it("renders the home page with brand name", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("Tha Suavepreneur")).toBeInTheDocument();
    expect(screen.getByText(/Modest Outfits/)).toBeInTheDocument();
    expect(screen.getByText(/Lagos, Nigeria/)).toBeInTheDocument();
    expect(screen.getByText("Book Your Consultation")).toBeInTheDocument();
  });

  it("displays feature cards", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("Premium Craftsmanship")).toBeInTheDocument();
    expect(screen.getByText("Made to Measure")).toBeInTheDocument();
    expect(screen.getByText("Precision Tailoring")).toBeInTheDocument();
    expect(screen.getByText("Elegant Designs")).toBeInTheDocument();
  });

  it("displays services section", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("Our Tailoring Excellence")).toBeInTheDocument();
    expect(screen.getByText("Bridal Collections")).toBeInTheDocument();
    expect(screen.getByText("Corporate Wear")).toBeInTheDocument();
    expect(screen.getByText("Traditional Attire")).toBeInTheDocument();
    expect(screen.getByText("Occasion Wear")).toBeInTheDocument();
  });
});
