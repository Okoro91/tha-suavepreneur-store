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
    // Use a more flexible matcher for text with nested elements
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Our Tailoring Excellence";
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Bridal Collections")).toBeInTheDocument();

    const corporateWear = screen.getAllByText(/Corporate Wear/i);
    expect(corporateWear).toHaveLength(2);

    const traditionalAttire = screen.getAllByText(/Traditional Attire/i);
    expect(traditionalAttire).toHaveLength(2);

    const OccasionWear = screen.getAllByText(/Occasion Wear/i);
    expect(OccasionWear).toHaveLength(2);

    // expect(screen.getByText("Occasion Wear")).toBeInTheDocument();
  });
});
