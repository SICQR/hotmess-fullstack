import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { ThemeToggler } from './theme-toggler.js';

const DemoContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: 'var(--colors-surface-background)',
      color: 'var(--colors-text-primary)',
      padding: 'var(--spacing-xl)',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-large)',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--typography-font-family)',
      fontSize: 'var(--typography-sizes-body-default)',
      transition: 'all var(--interactions-transitions-duration-fast) var(--interactions-transitions-easing-ease-in-out)',
      borderRadius: 'var(--borders-radius-large)',
      border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)',
    }}
  >
    <p>Click the toggler to switch themes.</p>
    {children}
  </div>
);

/**
 * A composition to demonstrate the ThemeToggler in action, starting in light mode.
 */
export const ThemeTogglerInAction = () => {
  return (
    <PhilipGizzieTheme>
      <DemoContainer>
        <ThemeToggler />
      </DemoContainer>
    </PhilipGizzieTheme>
  );
};

/**
 * A composition to demonstrate the ThemeToggler starting in dark mode.
 */
export const ThemeTogglerStartingInDarkMode = () => {
  return (
    <PhilipGizzieTheme initialTheme="dark">
      <DemoContainer>
        <ThemeToggler />
      </DemoContainer>
    </PhilipGizzieTheme>
  );
};