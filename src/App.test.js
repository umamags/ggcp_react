import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/South Chennai chapter of the International Giants Organization/i);
  expect(linkElement).toBeInTheDocument();
});
