import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders start button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Start Training/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders main body', () => {
  render(<App />);
  const divElement = screen.getByText(/Welcome to Trivia Bootcamp/i);
  expect(divElement).toBeInTheDocument();
});

//test click the start game button
//this test is buggy
test('click start button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Start Training/i);
  fireEvent.click(buttonElement);

  const answerDiv = screen.getAllByText(/Q*?/i);
  expect(answerDiv.length).toBeGreaterThan(1);
});
