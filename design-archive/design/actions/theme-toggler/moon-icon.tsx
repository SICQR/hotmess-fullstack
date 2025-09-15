import React from 'react';
import type { IconProps } from './icon-props-type.js';

/**
 * Moon icon for the theme toggler, indicating dark mode.
 */
export function MoonIcon({ className, width = '24', height = '24', ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      {...rest}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}