import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PhilipGizzieTheme } from './philip-gizzie-theme.js';
import { useThemeController } from './theme-controller.js';

// Helper component to consume the theme context
const ThemeConsumer = () => {
  const { themeMode, toggleTheme } = useThemeController();
  return (
    <div>
      <span data-testid="theme-mode">{themeMode}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('PhilipGizzieTheme', () => {
  it('renders with children and provides theme context', () => {
    render(
      <PhilipGizzieTheme>
        <ThemeConsumer />
      </PhilipGizzieTheme>
    );

    // Initial theme should be light
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
    
    // Toggle to dark
    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');

    // Toggle back to light
    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
  });

  it('defaults to light theme when initialTheme is not specified', () => {
    render(
      <PhilipGizzieTheme>
        <ThemeConsumer />
      </PhilipGizzieTheme>
    );
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
  });

  it('applies dark theme when initialTheme is set to dark', () => {
    render(
      <PhilipGizzieTheme initialTheme="dark">
        <ThemeConsumer />
      </PhilipGizzieTheme>
    );
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');
  });
});