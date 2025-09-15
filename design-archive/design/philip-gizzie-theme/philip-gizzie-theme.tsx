import { ReactNode, useCallback, useState } from 'react';
import classNames from 'classnames';
import { DeepPartial } from '@bitdesign/sparks.sparks-theme';
import { PhilipGizzieThemeProvider } from './philip-gizzie-theme-provider.js';
import { PhilipGizzieThemeSchema } from './philip-gizzie-tokens.js';
import { ThemeContext, ThemeContextValue, ThemeMode } from './theme-controller.js';
import { themeOptions } from './theme-options.js';
import styles from './philip-gizzie-theme.module.scss';

export type PhilipGizzieThemeProps = {
  /**
   * a root ReactNode for the component tree 
   * applied with the theme.
   */
  children?: ReactNode;

  /**
   * inject a class name to override to the theme.
   * this allows people to affect your theme. remove to avoid.
   */
  className?: string;

  /**
   * override tokens in the schema
   */
  overrides?: DeepPartial<PhilipGizzieThemeSchema>,

  /**
   * preset of the theme.
   */
  initialTheme?: ThemeMode;

  /**
   * style tags to include.
   */
  style?: React.CSSProperties,
};

/**
 * a theme for the philip-gizzie-theme organization.
 * it provides tokens, fonts and general styling for all components.
 */
export function PhilipGizzieTheme({ children, initialTheme = 'light', className, style, overrides, ...rest }: PhilipGizzieThemeProps) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialTheme);
  const themePreset = themeOptions[themeMode];

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }, []);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  const mergedOverrides = themePreset ? { ...themePreset, ...overrides } : overrides;
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <PhilipGizzieThemeProvider.ThemeProvider
        className={classNames(styles.philipGizzieTheme, className)}
        overrides={mergedOverrides}
        style={style}
        {...rest}
      >
        {children}
      </PhilipGizzieThemeProvider.ThemeProvider>
    </ThemeContext.Provider>
  );
}