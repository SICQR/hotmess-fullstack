import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Spinner } from './spinner.js';

export const BasicSpinner = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center' }}>
        <Spinner />
      </div>
    </PhilipGizzieTheme>
  );
};

export const SpinnerSizes = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)', padding: 'var(--spacing-large)', justifyContent: 'center' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </PhilipGizzieTheme>
  );
};

export const CustomColorSpinner = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center' }}>
        <Spinner size="large" style={{ borderColor: 'var(--colors-status-positive-default)', borderBottomColor: 'transparent' }} />
      </div>
    </PhilipGizzieTheme>
  );
};

export const AnotherCustomColorSpinner = () => {
    return (
      <PhilipGizzieTheme>
        <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center' }}>
          <Spinner size="large" style={{ borderColor: 'var(--colors-secondary-default)', borderBottomColor: 'transparent' }} />
        </div>
      </PhilipGizzieTheme>
    );
  };