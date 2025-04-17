import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Fullyear from "../Components/Fullyear";
import '@testing-library/jest-dom'; // for matchers like toBeInTheDocument

describe("Fullyear Calendar", () => {
    it("renders calendar with at least one grid", () => {
      render(<Fullyear />);
      const grids = screen.getAllByRole("grid", { hidden: true });
      expect(grids.length).toBeGreaterThan(0);
    });

    it("renders calendar events correctly", async () => {
        render(<Fullyear />);
    
        await waitFor(() => {
          expect(screen.getByText("Meeting")).toBeInTheDocument();
          expect(screen.getByText("Conference")).toBeInTheDocument();
          expect(screen.getByText("Workshop")).toBeInTheDocument();
        });
      });
  });