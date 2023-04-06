import { render, screen } from '@testing-library/react';
import App from '../components/App';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incrementB = screen.getByText('+');
    const countDisplay = screen.getByTestId('count');
    expect(countDisplay).toHaveTextContent('0');
    userEvent.click(incrementB);
    expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decrementB = screen.getByText('-');
    const countDisplay = screen.getByTestId('count');
    expect(countDisplay).toHaveTextContent('0');
    userEvent.click(decrementB);
    expect(countDisplay).toHaveTextContent('-1');
});
