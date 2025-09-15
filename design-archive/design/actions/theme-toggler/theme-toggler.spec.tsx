import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { ThemeToggler } from './theme-toggler.js';
import styles from './theme-toggler.module.scss';

describe('ThemeToggler', () => {
  it('should render the sun and moon icons', () => {
    const { container } = render(
      <PhilipGizzieTheme>
        <ThemeToggler />
      </PhilipGizzieTheme>
    );

    const sunIcon = container.querySelector(`.${styles.sunIcon}`);
    const moonIcon = container.querySelector(`.${styles.moonIcon}`);

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it('should toggle the theme when clicked', () => {
    const { container } = render(
      <PhilipGizzieTheme>
        <ThemeToggler />
      </PhilipGizzieTheme>
    );

    const togglerButton = container.querySelector('button');
    expect(togglerButton).toBeInTheDocument();

    fireEvent.click(togglerButton as Element);
  });

  it('should toggle between light and dark mode', () => {
    const { container } = render(
      <PhilipGizzieTheme>
        <ThemeToggler />
      </PhilipGizzieTheme>
    );

    const togglerButton = container.querySelector('button');
    expect(togglerButton).toBeInTheDocument();

    fireEvent.click(togglerButton as Element);

    // Check if the isDark class is applied after the click
    const themeToggler = container.querySelector(`.${styles.themeToggler}`);
    expect(themeToggler).toHaveClass(styles.isDark);

    fireEvent.click(togglerButton as Element);
    expect(themeToggler).not.toHaveClass(styles.isDark);
  });
});