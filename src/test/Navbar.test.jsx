import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../Components/Navbar';

describe('Navbar Component', () => {
    it('renders the logo correctly', () => {
        render(<Navbar />);
        const logo = screen.getByText('MyLogo');
        expect(logo).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
        render(<Navbar />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(4);

        expect(links[0]).toHaveTextContent('Home');
        expect(links[0]).toHaveAttribute('href', '#home');

        expect(links[1]).toHaveTextContent('About');
        expect(links[1]).toHaveAttribute('href', '#about');

        expect(links[2]).toHaveTextContent('Services');
        expect(links[2]).toHaveAttribute('href', '#services');

        expect(links[3]).toHaveTextContent('Contact');
        expect(links[3]).toHaveAttribute('href', '#contact');
    });

    it('applies the correct styles', () => {
        render(<Navbar />);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('navbar');
    });
});