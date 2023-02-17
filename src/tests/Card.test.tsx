import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../components/card';
import products from '../data/products';

const product = products[0];

describe('Card', () => {
	beforeEach(() => {
		render(<Card product={product} />);
	});

	it('should be in document', () => {
		const element = screen.getByText(product.title);
		expect(element).toBeInTheDocument();
	});

	it('should open the modal when clicked anything of the card and close the modal when click cancel button', async () => {
		const element = screen.getByRole('img');
		await userEvent.click(element);
		expect(screen.getByText(product.description)).toBeInTheDocument();
		await userEvent.click(screen.getByText('Cancel'));
		expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
	});
});
