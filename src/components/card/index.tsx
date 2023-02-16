import { useState } from 'react';
import { Product } from '../../data/products';
import ModalContent from '../modal-content';
import CardLayout from '../shared/ui/CardLayout';

type CardProps = {
	product: Product;
};

const Card = ({ product }: CardProps) => {
	const [modal, setModal] = useState<boolean>(false);
	return (
		<>
			<CardLayout onClick={() => setModal(true)}>
				<img src={product.image} alt={product.title} />
				<h4>{product.title}</h4>
				<p>
					Price: <span>${product.price}</span>
				</p>
				<p>
					Rating: <span>{product.rating.rate}</span>
				</p>
				<p>
					Total Counts: <span>{product.rating.count}</span>
				</p>
			</CardLayout>
			{modal && (
				<ModalContent product={product} onClick={() => setModal(false)} />
			)}
		</>
	);
};

export default Card;
