import React from 'react';
import { render, screen } from '@testing-library/react';

import { Logo } from './logo.js';
import styles from './logo.module.scss';

describe('Logo', () => {
  it('should render the default logo with name "Acme"', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo />
  <Logo name="Acme" />
    expect(nameElement?.textContent).toBe('Acme');
  });

  it('should render the logo with a custom name and slogan', () => {
    const { container } = render(
  <Logo name="Test Corp" slogan="Innovation" />
    );
    const nameElement = container.querySelector(`.${styles.name}`);
    const sloganElement = container.querySelector(`.${styles.slogan}`);

    expect(nameElement?.textContent).toBe('Test Corp');
    expect(sloganElement?.textContent).toBe('Innovation');
  });

  it('should render a link when href is provided', () => {
    const { container } = render(
  <Logo href="/home" />
    );
    const linkElement = container.querySelector('a');
    expect(linkElement).toHaveAttribute('href', '/home');
  });
});