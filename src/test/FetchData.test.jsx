import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import FetchData from '../Components/FetchData';
// Mocking the global fetch function
beforeEach(() => {
    global.fetch = vi.fn();
});
describe('FetchData Component', () => {
    it('renders loading text initially', () => {
        fetch.mockImplementationOnce(() => new Promise(() => {})); // Infinite pending promise
        render(<FetchData />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    it('renders fetched data after successful API call', async () => {
        //simulate a successful API response
        fetch.mockResolvedValueOnce({
            // Mocking the response of the fetch call
            json: () => Promise.resolve([
                { id: 1, title: 'Test Todo', completed: true }
            ]),
        });
        render(<FetchData />);
        // Find elements by their structure
        const idElement = await screen.findByText((_, element) => {
            return (
                element.tagName.toLowerCase() === 'p' &&
                element.textContent.trim() === 'ID: 1'
            );
        });
        const titleElement = await screen.findByText((_, element) => {
            return (
                element.tagName.toLowerCase() === 'p' &&
                element.textContent.trim() === 'Title: Test Todo'
            );
        });
        const completedElement = await screen.findByText((_, element) => {
            return (
                element.tagName.toLowerCase() === 'p' &&
                element.textContent.trim() === 'Completed: Yes'
            );
        }); 
        expect(titleElement).toBeInTheDocument();
        expect(completedElement).toBeInTheDocument();
        expect(idElement).toBeInTheDocument();
    });
    it('handles API errors gracefully', async () => {
        fetch.mockRejectedValueOnce(new Error('API Error'));
        render(<FetchData />);
        await waitFor(() => {
            expect(screen.getByText('Failed to load data.')).toBeInTheDocument();
        });
    });
});
