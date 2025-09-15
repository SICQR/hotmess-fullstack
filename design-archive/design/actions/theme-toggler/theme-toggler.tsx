import React from 'react';
import classNames from 'classnames';
import { useThemeController } from '@philip-gizzie/design.philip-gizzie-theme';
import { SunIcon } from './sun-icon.js';
import { MoonIcon } from './moon-icon.js';
import styles from './theme-toggler.module.scss';

export type ThemeTogglerProps = {
  /**
   * a class name to be applied to the component.
   */
  className?: string;

  /**
   * custom styles to be applied to the component.
   */
  style?: React.CSSProperties;
};

/**
 * A component to toggle between light and dark themes.
 * It uses the useThemeController hook to manage the theme state and provides a smooth animated transition between icons.
 */
export function ThemeToggler({ className, style }: ThemeTogglerProps) {
  const { themeMode, toggleTheme } = useThemeController();
  const isDarkMode = themeMode === 'dark';

  return (
    <button
      type="button"
      className={classNames(styles.themeToggler, isDarkMode && styles.isDark, className)}
      style={style}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={classNames(styles.iconWrapper, styles.sunIcon)}>
        <SunIcon aria-hidden="true" />
      </div>
      <div className={classNames(styles.iconWrapper, styles.moonIcon)}>
        <MoonIcon aria-hidden="true" />
      </div>
    </button>
  );
}