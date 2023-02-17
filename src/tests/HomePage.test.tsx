import { render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import HomePage from '../components/home-page';

const onClick = vi.fn(() => console.log('clicked'));

describe('HomePage', () => {
	beforeEach(() => {
		render(<HomePage username="aditya" onClick={onClick} />);
	});

	it('should have the username', () => {
		const element = screen.getByText('Logged in as aditya');

		expect(element).toBeInTheDocument();
	});

	it('should have a Logout button with type button', () => {
		const element = screen.getByRole('button');

		expect(element).toHaveAttribute('type', 'button');
		expect(element).toHaveStyle('width: 8rem');
		expect(element).toHaveTextContent('Logout');
	});
});
