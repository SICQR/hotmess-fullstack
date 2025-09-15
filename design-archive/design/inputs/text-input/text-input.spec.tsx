import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from './text-input.js';
import styles from './text-input.module.scss';

describe('TextInput', () => {
  it('should render a text input with the correct placeholder', () => {
    const { container } = render(<TextInput placeholder="Enter your name..." />);
    const input = container.querySelector(`.${styles.textInput}`) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Enter your name...');
  });

  it('should update the value when typing', () => {
    const onChange = vi.fn();
    const { container } = render(<TextInput onChange={onChange} />);
    const input = container.querySelector(`.${styles.textInput}`) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should apply a custom class name', () => {
    const { container } = render(<TextInput className="custom-class" />);
    const input = container.querySelector(`.${styles.textInput}`) as HTMLInputElement;
    expect(input).toHaveClass('custom-class');
  });
});