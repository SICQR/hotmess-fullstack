import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './button.js';
import styles from './button.module.scss';

describe('Button', () => {
  it('should render a button with text', () => {
    const { container } = render(<Button>Click me</Button>);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(<Button onClick={onClick}>Click me</Button>);
    const button = container.querySelector('button');
    fireEvent.click(button as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a disabled button', () => {
    const { container } = render(<Button disabled>Click me</Button>);
    const button = container.querySelector('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.disabled);
  });

  it('should render a link when href is provided', () => {
    const { container } = render(
  <Button href="/test">Click me</Button>
    );
    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Click me');
    expect(link).toHaveAttribute('href', '/test');
  });
});