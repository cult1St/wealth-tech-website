import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Wealth Tech homepage', () => {
  render(<App />);
  expect(screen.getByText(/Powering/i)).toBeInTheDocument();
  expect(screen.getByText(/Digital Finance/i)).toBeInTheDocument();
});
