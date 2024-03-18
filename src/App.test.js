import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Schedule Genius: Organize your college life efficiently/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders sign up button', () => {
  render(<App />);
  const signUpButton = screen.getByRole('button', { name: /Sign Up/i });
  expect(signUpButton).toBeInTheDocument();
});

test('renders logo image', () => {
  render(<App />);
  const logoImage = screen.getByAltText('Logo');
  expect(logoImage).toBeInTheDocument();
});
