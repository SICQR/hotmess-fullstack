import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge.js';
import styles from './badge.module.scss';

describe('Badge', () => {
  it('renders the badge with the correct label', () => {
    render(<Badge label="Test Badge" />);
    const badgeElement = screen.getByText('Test Badge');
    expect(badgeElement).toBeInTheDocument();
  });

  it('applies the correct styles for the filled variant', () => {
    render(<Badge label="Test Badge" variant="filled" />);
    const badgeElement = screen.getByText('Test Badge').closest('div');
    expect(badgeElement).toHaveClass(styles.filled);
  });

  it('applies the correct styles for the small size', () => {
    render(<Badge label="Test Badge" size="small" />);
    const badgeElement = screen.getByText('Test Badge').closest('div');
    expect(badgeElement).toHaveClass(styles.small);
  });
});