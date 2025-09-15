import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card.js';
import styles from './card.module.scss';

describe('Card Component', () => {
  it('should render children within the card', () => {
    const { container } = render(
      <Card>
        <div>Hello, world!</div>
      </Card>
    );
    expect(container.querySelector(`.${styles.card} > div`)).toBeInTheDocument();
  });

  it('should render the title when provided', () => {
    const { container } = render(<Card title="Test Title" />);
    expect(container.querySelector(`.${styles.card} .${styles.title}`)).toBeInTheDocument();
    expect(container.querySelector(`.${styles.card} .${styles.title}`)?.textContent).toBe("Test Title");
  });

  it('should apply interactive styles when interactive prop is true', () => {
    const { container } = render(<Card interactive />);
    expect(container.querySelector(`.${styles.card}`)).toHaveClass(styles.interactive);
  });
});