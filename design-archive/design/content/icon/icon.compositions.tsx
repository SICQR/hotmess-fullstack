import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Icon } from './icon.js';

// A sample SVG path for a star icon to be used in compositions
const StarIconPath = () => (
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
);

export const BasicIcon = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', color: 'var(--colors-text-primary)' }}>
        <Icon>
          <StarIconPath />
        </Icon>
      </div>
    </PhilipGizzieTheme>
  );
};

export const SizedIcons = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ display: 'flex', gap: 'var(--spacing-large)', alignItems: 'center', padding: 'var(--spacing-large)', color: 'var(--colors-text-primary)' }}>
        <Icon size={16}>
          <StarIconPath />
        </Icon>
        <Icon size={24}>
          <StarIconPath />
        </Icon>
        <Icon size={32}>
          <StarIconPath />
        </Icon>
        <Icon size={48}>
          <StarIconPath />
        </Icon>
      </div>
    </PhilipGizzieTheme>
  );
};

export const ColoredIcons = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ display: 'flex', gap: 'var(--spacing-large)', padding: 'var(--spacing-large)' }}>
        <Icon color="var(--colors-primary-default)">
          <StarIconPath />
        </Icon>
        <Icon color="var(--colors-status-positive-default)">
          <StarIconPath />
        </Icon>
        <Icon color="var(--colors-status-negative-default)">
          <StarIconPath />
        </Icon>
        <Icon color="var(--colors-status-warning-default)">
          <StarIconPath />
        </Icon>
      </div>
    </PhilipGizzieTheme>
  );
};

export const ClickableIcon = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', color: 'var(--colors-text-primary)' }}>
        <Icon onClick={() => alert('Icon clicked!')}>
          <StarIconPath />
        </Icon>
      </div>
    </PhilipGizzieTheme>
  );
};