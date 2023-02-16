import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ModalContent from '../components/modal-content';
import products from '../data/products';

const product = products[0];
const onClick = vi.fn();

describe('ModalContent', () => {
	it('should have title of the product', () => {
		render(<ModalContent product={product} onClick={onClick} />);

		const element = screen.getByText(product.title);
		expect(element).toBeInTheDocument();
	});

	it('should have description of the product', () => {
		render(<ModalContent product={product} onClick={onClick} />);

		const element = screen.getByText(product.description);
		expect(element).toBeInTheDocument();
	});

	it('should have Category of the product', () => {
		render(<ModalContent product={product} onClick={onClick} />);

		const element = screen.getByText(product.category);
		expect(element).toBeInTheDocument();
	});

	it('should have price of the product', () => {
		render(<ModalContent product={product} onClick={onClick} />);

		const element = screen.getByText(`$${product.price}`);
		expect(element).toBeInTheDocument();
	});

	it('should have a cancel button', () => {
		render(
			<ModalContent product={product} onClick={() => console.log('Hello')} />
		);

		const element = screen.getByText('Cancel');
		expect(element).toBeInTheDocument();
		expect(element).toHaveAttribute('type', 'button');
	});
});
