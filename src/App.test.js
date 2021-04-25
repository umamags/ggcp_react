import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Giants Group of Chennai Pushkar/i);
  expect(linkElement).toBeInTheDocument();
});
