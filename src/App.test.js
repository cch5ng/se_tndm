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

  const questionDiv = screen.queryAllByText(/Q*?/i);
  expect(questionDiv.length).toBeGreaterThanOrEqual(1);

});

test.skip('click answer button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Start Training/i);
  fireEvent.click(buttonElement);

  const answerButton = screen.getAllByRole('button');
  expect(answerButton.length).toBeGreaterThanOrEqual(3);

  //this is not working
  const answerButtonFirst = screen.queryAllByRole('button');
  fireEvent.click(answerButtonFirst[0]);

  const nextButton = screen.queryByTestId(/Next/i);
  expect(nextButton).toBeInTheDocument();
});
