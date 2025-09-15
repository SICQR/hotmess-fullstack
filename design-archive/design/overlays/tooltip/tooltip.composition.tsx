import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Tooltip } from './tooltip.js';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  padding: '50px',
  minHeight: '200px',
  backgroundColor: 'var(--colors-surface-background)',
};

const positionsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
};

const buttonStyle: React.CSSProperties = {
  padding: 'var(--spacing-small) var(--spacing-default)',
  border:
    'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)',
  borderRadius: 'var(--borders-radius-medium)',
  backgroundColor: 'var(--colors-surface-primary)',
  color: 'var(--colors-text-primary)',
  fontFamily: 'var(--typography-font-family)',
  cursor: 'var(--interactions-cursor-pointer)',
};

const imageStyle: React.CSSProperties = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: 'var(--borders-radius-large)',
  boxShadow: 'var(--effects-shadows-small)',
};

export const BasicTooltip = () => {
  return (
    <PhilipGizzieTheme>
      <div style={containerStyle}>
        <Tooltip text="This is a helpful tip!">
          <button style={buttonStyle}>Hover over me</button>
        </Tooltip>
      </div>
    </PhilipGizzieTheme>
  );
};

export const TooltipWithDifferentPositions = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ ...containerStyle, flexDirection: 'column' }}>
        <div style={positionsContainerStyle}>
          <Tooltip text="Tooltip on top" position="top">
            <button style={buttonStyle}>Top</button>
          </Tooltip>
          <Tooltip text="Tooltip on the right" position="right">
            <button style={buttonStyle}>Right</button>
          </Tooltip>
          <Tooltip text="Tooltip on the bottom" position="bottom">
            <button style={buttonStyle}>Bottom</button>
          </Tooltip>
          <Tooltip text="Tooltip on the left" position="left">
            <button style={buttonStyle}>Left</button>
          </Tooltip>
        </div>
      </div>
    </PhilipGizzieTheme>
  );
};

export const TooltipOnImage = () => {
  return (
    <PhilipGizzieTheme>
      <div style={containerStyle}>
        <Tooltip
          text="blue and white checkered textile"
          position="bottom"
        >
          <img
            src="https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGludGVyZmFjZSUyMGVsZW1lbnRzfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDkwfDA&ixlib=rb-4.1.0"
            alt="blue and white checkered textile"
            style={imageStyle}
          />
        </Tooltip>
      </div>
    </PhilipGizzieTheme>
  );
};