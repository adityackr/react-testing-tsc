import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Mocked, vi } from 'vitest';
import App from '../App';

vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

const users = [
	{ username: 'aditya', password: 'Pass1234' },
	{ username: 'john', password: 'Test1234' },
];

describe('App', () => {
	beforeEach(() => {
		mockedAxios.get.mockResolvedValueOnce({ data: users });
		render(<App />);
	});
	it('renders App component', () => {
		expect(
			screen.getByPlaceholderText('Enter your email or username')
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Enter your password')
		).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByText('Login')).toBeInTheDocument();
	});

	it('should show error message if username or password is invalid', async () => {
		const loginButton = screen.getByRole('button');

		await userEvent.click(loginButton);
		expect(screen.getByText('Invalid username or email')).toBeInTheDocument();
		expect(screen.getByText('Invalid Password')).toBeInTheDocument();
	});

	it('should logged in successfully and logged out when click the logout button', async () => {
		await userEvent.type(
			screen.getByPlaceholderText('Enter your email or username'),
			users[1].username
		);
		await userEvent.type(
			screen.getByPlaceholderText('Enter your password'),
			users[1].password
		);
		await userEvent.click(screen.getByRole('button'));

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(
			screen.getByText(`Logged in as ${users[1].username}`)
		).toBeInTheDocument();

		await userEvent.click(screen.getByText('Logout'));
		expect(screen.getByText('Login')).toBeInTheDocument();
	});
});
