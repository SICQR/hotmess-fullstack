import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Flex } from './flex.js';

const Box = ({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) => (
  <div
    style={{
      backgroundColor: 'var(--colors-surface-primary)',
      color: 'var(--colors-text-primary)',
      border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)',
      borderRadius: 'var(--borders-radius-medium)',
      padding: 'var(--spacing-large)',
      minWidth: '80px',
      textAlign: 'center',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children || 'Box'}
  </div>
);

export const BasicRowLayout = () => (
  <PhilipGizzieTheme>
    <Flex gap="var(--spacing-default)">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Flex>
  </PhilipGizzieTheme>
);

export const ColumnLayout = () => (
  <PhilipGizzieTheme>
    <Flex flexDirection="column" gap="var(--spacing-default)">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Flex>
  </PhilipGizzieTheme>
);

export const JustifyAndAlign = () => (
  <PhilipGizzieTheme>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap="var(--spacing-default)"
      style={{
        height: '200px',
        padding: 'var(--spacing-default)',
        backgroundColor: 'var(--colors-surface-secondary)',
        borderRadius: 'var(--borders-radius-large)',
      }}
    >
      <Box style={{ height: '60px' }}>Item 1</Box>
      <Box style={{ height: '120px' }}>Item 2</Box>
      <Box style={{ height: '80px' }}>Item 3</Box>
    </Flex>
  </PhilipGizzieTheme>
);

export const WrappingLayout = () => (
  <PhilipGizzieTheme>
    <Flex
      flexWrap="wrap"
      gap="var(--spacing-default)"
      style={{
        width: '320px',
        padding: 'var(--spacing-default)',
        backgroundColor: 'var(--colors-surface-secondary)',
        borderRadius: 'var(--borders-radius-large)',
      }}
    >
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
    </Flex>
  </PhilipGizzieTheme>
);