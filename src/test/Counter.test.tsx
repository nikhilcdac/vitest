// Counter.test.jsx
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../Components/Counter';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest'; // Import Vitest functions
import '@testing-library/jest-dom'; // For assertions like .toHaveTextContent()

describe('Counter component', () => {
  test('initial count is 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });

  test('increments count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  test('decrements count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: -1');
  });
});
