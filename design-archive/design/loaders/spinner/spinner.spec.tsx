import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from './spinner.js';
import styles from './spinner.module.scss';

describe('Spinner', () => {
  it('should render a spinner with the medium size by default', () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector(`.${styles.spinner}`);
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(styles.medium);
  });

  it('should render a spinner with the specified size', () => {
    const { container } = render(<Spinner size="large" />);
    const spinner = container.querySelector(`.${styles.spinner}`);
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(styles.large);
  });

  it('should render a visually hidden loading message for accessibility', () => {
    const { container } = render(<Spinner />);
    const loadingMessage = container.querySelector(`.${styles.visuallyHidden}`);
    expect(loadingMessage).toBeInTheDocument();
    expect(loadingMessage).toHaveTextContent('Loading...');
  });
});