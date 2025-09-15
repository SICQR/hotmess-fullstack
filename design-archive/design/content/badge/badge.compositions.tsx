import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Badge } from './badge.js';

const flexContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '16px',
  alignItems: 'center',
  backgroundColor: 'var(--colors-surface-background)',
};

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const FilledBadges = () => {
  return (
    <PhilipGizzieTheme>
      <div style={flexContainerStyle}>
        <Badge label="Default" />
        <Badge label="Primary" color="primary" />
        <Badge label="Secondary" color="secondary" />
        <Badge label="Success" color="positive" />
        <Badge label="Error" color="negative" />
        <Badge label="Warning" color="warning" />
        <Badge label="Info" color="info" />
      </div>
    </PhilipGizzieTheme>
  );
};

export const OutlinedBadges = () => {
  return (
    <PhilipGizzieTheme>
      <div style={flexContainerStyle}>
        <Badge label="Default" variant="outlined" />
        <Badge label="Primary" variant="outlined" color="primary" />
        <Badge label="Secondary" variant="outlined" color="secondary" />
        <Badge label="Success" variant="outlined" color="positive" />
        <Badge label="Error" variant="outlined" color="negative" />
        <Badge label="Warning" variant="outlined" color="warning" />
        <Badge label="Info" variant="outlined" color="info" />
      </div>
    </PhilipGizzieTheme>
  );
};

export const BadgeSizes = () => {
  return (
    <PhilipGizzieTheme>
      <div style={flexContainerStyle}>
        <Badge label="Small" color="primary" size="small" />
        <Badge label="Medium" color="primary" size="medium" />
        <Badge label="Large" color="primary" size="large" />
      </div>
    </PhilipGizzieTheme>
  );
};

export const BadgesWithIcons = () => {
  return (
    <PhilipGizzieTheme>
      <div style={flexContainerStyle}>
        <Badge
          label="Verified"
          color="positive"
          icon={<CheckCircleIcon />}
        />
        <Badge
          label="Needs Update"
          variant="outlined"
          color="info"
          icon={<InfoIcon />}
        />
        <Badge
          label="Archived"
          size="small"
          icon={<InfoIcon />}
        />
      </div>
    </PhilipGizzieTheme>
  );
};