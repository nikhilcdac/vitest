import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Daygrid from '../Components/Daygrid'; // Assuming your component is named Daygrid

describe('Daygrid', () => {
  it('renders the calendar with navigation buttons', () => {
    render(<Daygrid />);
    
    // Find the "next" button by its role and aria-label
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    
    // Find the "prev" button by its role and aria-label
    const prevButton = screen.getByRole('button', { name: /prev/i });
    expect(prevButton).toBeInTheDocument();
    
    // Find the "today" button by its role and aria-label
    const todayButton = screen.getByRole('button', { name: /today/i });
    expect(todayButton).toBeInTheDocument();
  });

  
});
