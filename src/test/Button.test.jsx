


import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "../Components/Button";
describe("Button Component", () => {

  it("renders the button with the correct label", () => {
    render(<Button label="Click Me" />); 
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });
  it("triggers onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("sets the correct button type", () => {
    render(<Button label="Submit" type="submit" />);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit"); 
  });
});
