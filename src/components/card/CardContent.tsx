import { Product } from '../../data/products';
import CardLayout from '../shared/ui/CardLayout';

type CardProps = {
	product: Product;
	onClick: () => void;
};

const CardContent = ({ product, onClick }: CardProps) => {
	return (
		<CardLayout onClick={onClick}>
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
	);
};

export default CardContent;
