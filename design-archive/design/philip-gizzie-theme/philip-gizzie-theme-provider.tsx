import { createTheme } from '@bitdesign/sparks.sparks-theme';
import { PhilipGizzieThemeSchema, philipGizzieTokens } from './philip-gizzie-tokens.js';

/**
 * creating and declaring the philip-gizzie-theme theme.
 * define the theme schema as a type variable for proper type completions.
 */
export const PhilipGizzieThemeProvider = createTheme<PhilipGizzieThemeSchema>({
  tokens: philipGizzieTokens,
});

/**
 * a react hook for contextual access to design token
 * from components.
 */
export const { useTheme } = PhilipGizzieThemeProvider;