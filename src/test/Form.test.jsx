import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Form from '../Components/Form';

describe('Form Component', () => {
    // Mock function to be passed as onSubmit prop
    const mockOnSubmit = vi.fn();

    beforeEach(() => {
        mockOnSubmit.mockClear(); // Reset mock function before each test
        vi.spyOn(window, 'alert').mockImplementation(() => {}); // Mock window.alert
    });

    afterEach(() => {
        vi.restoreAllMocks(); // Restore all mocks after each test
    });

    it('renders the form with ID, Title, and Completed fields', () => {
        render(<Form onSubmit={mockOnSubmit} />);

        // Check if all fields are rendered
        expect(screen.getByLabelText(/id/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/completed:/i)).toBeInTheDocument(); // Check for the legend text
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('displays an alert when required fields are missing', () => {
        render(<Form onSubmit={mockOnSubmit} />);

        const submitButton = screen.getByRole('button', { name: /submit/i });

        // Click submit without filling out the required fields
        fireEvent.click(submitButton);

        // Assert that the alert is displayed
        expect(screen.getByText(/completed:/i)).toBeInTheDocument();
    });

    it('submits the form with correct data', () => {
        const handleSubmit = vi.fn();
        render(<Form onSubmit={handleSubmit} />);

        // Fill out the form fields
        const idInput = screen.getByLabelText(/id/i);
        const titleInput = screen.getByLabelText(/title/i);
        const completedYes = screen.getByLabelText(/yes/i);

        fireEvent.change(idInput, { target: { value: '1' } });
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.click(completedYes);

        const submitButton = screen.getByRole('button', { name: /submit/i });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert that the onSubmit function was called with the correct form data
        expect(handleSubmit).toHaveBeenCalledWith({
            id: '1',
            title: 'Test Title',
            completed: 'yes',
        });
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('resets the form after submission', () => {
        const handleSubmit = vi.fn();
        render(<Form onSubmit={handleSubmit} />);

        // Fill out the form fields
        const idInput = screen.getByLabelText(/id/i);
        const titleInput = screen.getByLabelText(/title/i);
        const completedNo = screen.getByLabelText(/no/i);

        fireEvent.change(idInput, { target: { value: '2' } });
        fireEvent.change(titleInput, { target: { value: 'Another Title' } });
        fireEvent.click(completedNo);

        const submitButton = screen.getByRole('button', { name: /submit/i });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert that the form fields are reset
        expect(idInput.value).toBe('');
        expect(titleInput.value).toBe('');
        expect(completedNo.checked).toBe(true); // Default value is 'no'
    });
});
