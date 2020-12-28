import { render, screen } from '@testing-library/react';
import App from './App';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

test('renders todo app', () => {
  render(<App />);
  expect(screen.getByText('To do app')).toBeInTheDocument();
});

test('renders todo list and checks the random button', () => {
  render(<TodoList />);
  const random = screen.getByText('Random');
  expect(random).toBeInTheDocument();
  
});

test('renders todo form and check the input field', () => {
  const { getByTestId } = render(<TodoForm />);
  const inputElement = getByTestId('input-box');
  expect(inputElement).toBeInTheDocument();
});