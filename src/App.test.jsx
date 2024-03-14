import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page elements', () => {
  render(<App />);

  // Test for the presence of elements specific to your landing page
  const titleElement = screen.getByText(/Schedule Genius/i);
  expect(titleElement).toBeInTheDocument();

  // You can add more assertions here as needed
});
