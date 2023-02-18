import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import CardContent from '../components/card/CardContent';
import products from '../data/products';

const product = products[0];
const onClick = vi.fn(() => console.log('clicked'));

describe('CardContent', () => {
	beforeEach(() => {
		render(<CardContent onClick={onClick} product={product} />);
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
});
