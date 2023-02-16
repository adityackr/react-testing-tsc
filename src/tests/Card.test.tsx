import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../components/card';
import products from '../data/products';

const product = products[0];

describe('Card', () => {
	beforeEach(() => {
		render(<Card product={product} />);
	});

	it('should have a title', () => {
		const element = screen.getByText(product.title);
		expect(element).toBeInTheDocument();
	});
	it('should have an image', () => {
		const element = screen.getByRole('img');
		expect(element).toBeInTheDocument();
		expect(element).toHaveAttribute('src', product.image);
	});
	it('should have its price', () => {
		const element = screen.getAllByText(`Price:`);
		expect(element[0]).toBeInTheDocument();
		expect(element[0]).toHaveTextContent(String(product.price));
	});
	it('should have its rating', () => {
		const rateEl = screen.getByText(product.rating.rate);
		expect(rateEl).toBeInTheDocument();
	});
	it('should show total votes counted', () => {
		const countEl = screen.getByText(product.rating.count);
		expect(countEl).toBeInTheDocument();
	});
	it('should open the modal when clicked anything of the card and close the modal when click cancel button', async () => {
		const element = screen.getByRole('img');
		await userEvent.click(element);
		expect(screen.getByText(product.description)).toBeInTheDocument();
		await userEvent.click(screen.getByText('Cancel'));
		expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
	});
});
