import { prettyDOM, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('проверка функции App', () => {
  test.skip('renders learn react link', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/Type here/i);
    // console.log(prettyDOM(inputElement));

    // expect(helloWorldElement).toBeInTheDocument();
    // expect(buttonElement).toBeInTheDocument();
    // expect(inputElement).toBeInTheDocument();
    // expect(inputElement).toMatchSnapshot();
  });

  test('проверка ввода', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Type here/i);
    expect(screen.queryByTestId('h3')).toBeNull();
    // fireEvent.input(inputElement, { target: { value: 'test' } });
    userEvent.type(inputElement, 'test');
    expect(await screen.findByTestId('h3')).toHaveTextContent('test');
  });
});
