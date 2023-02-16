import { Product } from '../../data/products';
import Button from '../shared/ui/Button';
import Modal from '../shared/ui/Modal';

type ModalProps = {
	product: Product;
	onClick: () => void;
};

const ModalContent = ({ product, onClick }: ModalProps) => {
	return (
		<Modal>
			<h3>{product.title}</h3>
			<h5>{product.description}</h5>
			<p>
				Category: <span>{product.category}</span>
			</p>
			<p>
				Price: <span>${product.price}</span>
			</p>
			<Button type="button" onClick={onClick}>
				Cancel
			</Button>
		</Modal>
	);
};

export default ModalContent;
