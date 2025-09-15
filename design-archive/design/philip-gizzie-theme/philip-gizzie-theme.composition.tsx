import { TokenViewer } from '@bitdesign/sparks.sparks-theme';
import { useTheme } from './philip-gizzie-theme-provider.js';
import { PhilipGizzieTheme } from './philip-gizzie-theme.js';

function ViewTokens() {
  const theme = useTheme();

  return <TokenViewer theme={theme} />;
}

export const LightTheme = () => {
  return (
    <PhilipGizzieTheme>
      <ViewTokens />
    </PhilipGizzieTheme>
  );
};

export const DarkTheme = () => {
  return (
    <PhilipGizzieTheme initialTheme='dark'>
      <ViewTokens />
    </PhilipGizzieTheme>
  );
};