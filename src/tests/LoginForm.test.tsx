import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { initialLoginInfo } from '../App';
import LoginForm from '../components/loginForm';

const onChange = vi.fn(() => console.log('changed'));
const onSubmit = vi.fn(() => console.log('submitted'));
const error = false;

describe('LoginForm', () => {
	beforeEach(() => {
		render(
			<LoginForm
				loginInfo={initialLoginInfo}
				onChange={onChange}
				onSubmit={onSubmit}
				error={error}
			/>
		);
	});

	it('should have an input for username or email with label', () => {
		const labelElement = screen.getByLabelText('Email or username');
		const inputElement = screen.getByPlaceholderText(
			'Enter your email or username'
		);

		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});

	it('should have an input for password with label', () => {
		const labelElement = screen.getByLabelText('Password');
		const inputElement = screen.getByPlaceholderText('Enter your password');
		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute('type', 'password');
	});

	it('should have a submit type button with text "Login"', () => {
		const element = screen.getByRole('button');

		expect(element).toBeInTheDocument();
		expect(element).toHaveAttribute('type', 'submit');
		expect(element).toHaveTextContent('Login');
	});
});
