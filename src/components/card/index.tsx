import { useState } from 'react';
import { Product } from '../../data/products';
import ModalContent from '../modal-content';
import CardContent from './CardContent';

type CardProps = {
	product: Product;
};

const Card = ({ product }: CardProps) => {
	const [modal, setModal] = useState<boolean>(false);
	return (
		<>
			<CardContent product={product} onClick={() => setModal(true)} />
			{modal && (
				<ModalContent product={product} onClick={() => setModal(false)} />
			)}
		</>
	);
};

export default Card;
