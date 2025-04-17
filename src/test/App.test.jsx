import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

// Test the full integration of Form and Todo within the App component
describe('App Component', () => {
  it('renders Todo with form data after form submission', async () => {
    render(<App />);

    // Simulate user input in the form fields
    fireEvent.change(screen.getByLabelText(/id/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Todo' } });

    // Select the radio button for "Completed: No"
    fireEvent.click(screen.getByLabelText(/no/i));

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the Todo component to receive and render the submitted data
    await waitFor(() => {
      // Find elements by their structure
      const idElement = screen.getByText((_, element) => {
        return (
          element.tagName.toLowerCase() === 'p' &&
          element.textContent.trim() === 'ID: 1'
        );
      });

      const titleElement = screen.getByText((_, element) => {
        return (
          element.tagName.toLowerCase() === 'p' &&
          element.textContent.trim() === 'Title: Test Todo'
        );
      });

      const completedElement = screen.getByText((_, element) => {
        return (
          element.tagName.toLowerCase() === 'p' &&
          element.textContent.trim() === 'Completed: No'
        );
      });

      // Assert that the elements are in the document
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
      expect(completedElement).toBeInTheDocument();
    });
  });
});
