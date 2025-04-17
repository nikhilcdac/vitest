import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../Components/Card"; // Adjust the import path based on your file structure

describe("Card Component", () => {
  it("renders the Card component with all elements", () => {
    render(<Card />);

    // Check if the image is rendered correctly
    const image = screen.getByAltText(/scenic view/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg"
    );
    expect(image).toHaveAttribute("alt", "Scenic View");

    // Check if the title is rendered correctly
    const title = screen.getByText(/Explore Gangtok/i);
    expect(title).toBeInTheDocument();

    // Check if the paragraph text is rendered correctly
    const text = screen.getByText(
      /Discover the beauty of Gangtok with its serene landscapes and vibrant culture./i
    );
    expect(text).toBeInTheDocument();

    // Check if the button is rendered correctly
    const button = screen.getByRole("button", { name: /learn more/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Learn More");
  });
});
