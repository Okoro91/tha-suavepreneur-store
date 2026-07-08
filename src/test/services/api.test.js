import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
} from "../../services/api";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("API Service", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("fetches products successfully", async () => {
    const mockProducts = [{ id: 1, title: "Test Product" }];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const result = await fetchProducts();
    expect(result).toEqual(mockProducts);
    expect(mockFetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  it("handles fetch error", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(fetchProducts()).rejects.toThrow("Failed to fetch products");
  });

  it("fetches product by id", async () => {
    const mockProduct = { id: 1, title: "Test Product" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const result = await fetchProductById(1);
    expect(result).toEqual(mockProduct);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/1",
    );
  });

  it("fetches categories", async () => {
    const mockCategories = ["electronics", "jewelery"];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories,
    });

    const result = await fetchCategories();
    expect(result).toEqual(mockCategories);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/categories",
    );
  });
});
