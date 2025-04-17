import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import ThemeToggle from "../Components/ThemeToggle"; // Adjust path as needed

describe("ThemeToggle", () => {
  beforeEach(() => {
    // Clear localStorage and class list before each test
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("renders with correct initial theme based on system preference", () => {
    // Mock system preference
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    render(<ThemeToggle />);

    // It should start as dark mode and show the sun icon (to switch to light)
    expect(screen.getByRole("button")).toHaveTextContent("sun");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles theme from dark to light and updates localStorage", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("sun");

    fireEvent.click(button);

    expect(button).toHaveTextContent("moon");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("toggles theme from light to dark and updates localStorage", () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("moon");

    fireEvent.click(button);

    expect(button).toHaveTextContent("sun");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
