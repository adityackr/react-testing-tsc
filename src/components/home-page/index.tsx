import Button from '../shared/ui/Button';
import Heading from '../shared/ui/Heading';

type HomePageProps = {
	username: string;
	onClick: () => void;
};

const HomePage = ({ username, onClick }: HomePageProps) => {
	return (
		<div>
			<Heading>Logged in as {username}</Heading>
			<Button
				style={{ margin: '0 auto', width: '8rem' }}
				type={'button'}
				onClick={onClick}
			>
				Logout
			</Button>
		</div>
	);
};

export default HomePage;
