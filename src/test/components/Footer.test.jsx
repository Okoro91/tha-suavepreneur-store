import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Footer from "../../components/Footer/Footer";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Footer Component", () => {
  it("renders brand name and description", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Tha Suavepreneur")).toBeInTheDocument();
    expect(screen.getByText(/Modest Outfits/)).toBeInTheDocument();
    // Use getAllByText and check length
    const locationElements = screen.getAllByText(/Lagos, Nigeria/);
    expect(locationElements.length).toBe(2); // Both instances should exist
    // Both are valid - one in brand section, one in contact section
  });

  it("renders quick links", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    renderWithRouter(<Footer />);
    const socialLinks = screen.getAllByRole("link");
    expect(
      socialLinks.some(
        (link) => link.getAttribute("aria-label") === "Instagram",
      ),
    ).toBe(true);
  });

  it("renders contact information", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("+234 806 054 8457")).toBeInTheDocument();
    expect(screen.getByText("info@thasuavepreneur.com")).toBeInTheDocument();
  });

  it("renders copyright year", () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} Tha Suavepreneur. All rights reserved.`,
      ),
    ).toBeInTheDocument();
  });
});
