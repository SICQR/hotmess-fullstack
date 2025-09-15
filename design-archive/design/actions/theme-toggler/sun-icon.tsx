import React from 'react';
import type { IconProps } from './icon-props-type.js';

/**
 * Sun icon for the theme toggler, indicating light mode.
 */
export function SunIcon({ className, width = '24', height = '24', ...rest }: IconProps) {
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
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM12 4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM5.636 6.636a1 1 0 0 1-.707-1.707l1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-.707.293ZM18.364 19.364a1 1 0 0 1-.707-1.707l1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-.707.293ZM22 13h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM4 13H2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM18.364 6.636a1 1 0 0 1-.707-.293l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1-.707 1.707ZM5.636 19.364a1 1 0 0 1-.707-.293l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1-.707 1.707Z" />
    </svg>
  );
}