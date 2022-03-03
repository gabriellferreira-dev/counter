import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button, { ButtonProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('should display a button', () => {
    renderedButton('', { color: 'primary' });

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render with another theme', () => {
    renderedButton('', { color: 'secondary' });

    expect(screen.getByRole('button').getAttribute('color')).toBe('secondary');
  });
  it('should render a button with icon', () => {
    const { getByTestId } = renderedButton('Teste', {
      color: 'secondary',
      icon: 'arrow-right',
    });

    expect(getByTestId('icon')).toBeInTheDocument();
  });
  it('should execute the function passed when click', () => {
    const MockedFn = jest.fn();

    renderedButton('Teste', {
      color: 'secondary',
      icon: 'arrow-right',
      onClick: MockedFn,
    });

    const button = screen.getByRole('button');

    userEvent.click(button);
    userEvent.click(button);

    expect(MockedFn).toBeCalled();
    expect(MockedFn).toBeCalledTimes(2);
  });
});

const renderedButton = (text: string, props: ButtonProps) => {
  return render(
    <ThemeProvider theme={theme}>
      <Button {...props}>{text}</Button>
    </ThemeProvider>,
  );
};
