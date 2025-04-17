import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Faq from "../Components/Faq";
import data2 from "../Components/Data2.json";

// Mock the JSON data if needed
vi.mock("../Components/Data2.json", () => ({
  default: [
    {
      id: "section-1",
      title: "General Questions",
      content: [
        {
          question: "What is your return policy?",
          answer: ["You can return any item within 30 days."],
          toggle: false,
        },
        {
          question: "Do you ship internationally?",
          answer: ["Yes, we ship to most countries worldwide."],
          toggle: false,
        },
      ],
    },
  ],
}));

describe("Faq2 component", () => {
  beforeEach(() => {
    render(<Faq />);
  });

  it("renders section titles", () => {
    expect(screen.getByText("General Questions")).toBeInTheDocument();
  });

  it("renders all questions", () => {
    expect(screen.getByText("What is your return policy?")).toBeInTheDocument();
    expect(screen.getByText("Do you ship internationally?")).toBeInTheDocument();
  });

  it("toggles the answer on question click", () => {
    const question = screen.getByText("What is your return policy?");
    fireEvent.click(question);
    expect(screen.getByText("You can return any item within 30 days.")).toBeVisible();
  });

  it("closes other answers when a new question is clicked", () => {
    const firstQuestion = screen.getByText("What is your return policy?");
    const secondQuestion = screen.getByText("Do you ship internationally?");
  
    // Open the first question
    fireEvent.click(firstQuestion);
    expect(screen.getByText("You can return any item within 30 days.")).toBeInTheDocument();
  
    // Click the second question
    fireEvent.click(secondQuestion);
  
    // Check that second answer is now shown
    expect(screen.getByText("Yes, we ship to most countries worldwide.")).toBeInTheDocument();
  
    // Instead of checking visibility, ensure the first answer is not visually present
    const firstAnswer = screen.getByText("You can return any item within 30 days.");
    expect(firstAnswer.parentElement).toHaveClass("max-h-0");
  });
  
});
