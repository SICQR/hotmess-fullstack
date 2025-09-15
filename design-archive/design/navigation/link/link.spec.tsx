import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Link } from './link.js';
import styles from './link.module.scss';

describe('Link Component', () => {
  it('should render an internal link with the correct text and href', () => {
    const { container } = render(
  <Link href="/home">Home</Link>
    );

    const linkElement = container.querySelector(`.${styles.link}`);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Home');
    expect((linkElement as HTMLAnchorElement).getAttribute('href')).toBe('/home');
  });

  it('should render an external link with the correct text and attributes', () => {
    const { container } = render(
      <MemoryRouter>
        <Link href="https://example.com" external>
          Example
        </Link>
  <Link href="https://example.com">Example</Link>
    const linkElement = container.querySelector(`.${styles.link}`);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Example');
    expect((linkElement as HTMLAnchorElement).getAttribute('href')).toBe('https://example.com');
    expect((linkElement as HTMLAnchorElement).getAttribute('target')).toBe('_blank');
    expect((linkElement as HTMLAnchorElement).getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should call onClick handler when the link is clicked', () => {
    const onClick = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <Link href="/test" onClick={onClick}>
          Test Link
        </Link>
      </MemoryRouter>
    );

    const linkElement = container.querySelector(`.${styles.link}`);
    fireEvent.click(linkElement as HTMLAnchorElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});