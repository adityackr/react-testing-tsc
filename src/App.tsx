import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import HomePage from './components/home-page';
import LoginForm from './components/loginForm';

export type InitialInfo = {
	username: string;
	password: string;
	isLoggedIn: boolean;
	hasError: boolean;
};

type User = {
	username: string;
	password: string;
};

type serverData = User;

export const initialLoginInfo: InitialInfo = {
	username: '',
	password: '',
	isLoggedIn: false,
	hasError: false,
};

const App = () => {
	const [loginInfo, setLoginInfo] = useState(initialLoginInfo);
	const [users, setUsers] = useState<User[] | []>([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/users')
			.then((res) => res.data)
			.then((data) =>
				data.map((d: serverData) =>
					setUsers((prev: User[]) => [
						...prev,
						{ username: d.username, password: d.password },
					])
				)
			);
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const verified = users.filter(
			(user: User) =>
				loginInfo.username === user.username &&
				loginInfo.password === user.password
		);
		if (verified.length > 0) {
			setLoginInfo((prev: InitialInfo) => ({
				...prev,
				isLoggedIn: true,
			}));
		} else {
			setLoginInfo((prev: InitialInfo) => ({
				...prev,
				hasError: true,
			}));
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginInfo((prev: InitialInfo) => ({
			...prev,
			hasError: false,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLogoutBtn = () => {
		setLoginInfo(initialLoginInfo);
	};

	return (
		<div>
			{loginInfo.isLoggedIn ? (
				<HomePage username={loginInfo.username} onClick={handleLogoutBtn} />
			) : (
				<LoginForm
					onSubmit={handleSubmit}
					onChange={handleChange}
					loginInfo={loginInfo}
					error={loginInfo.hasError}
				/>
			)}
		</div>
	);
};

export default App;
