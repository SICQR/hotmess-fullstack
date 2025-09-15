import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CtaButton } from './cta-button.js';
import styles from './cta-button.module.scss';

describe('CtaButton', () => {
  it('should render children', () => {
    const { container } = render(<CtaButton>Click Me</CtaButton>);
    const button = container.querySelector(`.${styles.ctaButton}`);
    expect(button).toHaveTextContent('Click Me');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(<CtaButton onClick={onClick}>Click Me</CtaButton>);
    const button = container.querySelector(`.${styles.ctaButton}`) as HTMLButtonElement;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render as a link when href is provided', () => {
    const { container } = render(
  <CtaButton href="/test">Click Me</CtaButton>
    );
    const link = container.querySelector(`.${styles.ctaButton}`) as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('/test');
  });

  it('should be disabled when disabled is true', () => {
    const { container } = render(<CtaButton disabled>Click Me</CtaButton>);
    const button = container.querySelector(`.${styles.ctaButton}`) as HTMLButtonElement;
    expect(button).toBeDisabled();
  });
});