import React from 'react';

/**
 * The default SVG logo for the Acme brand. It's an abstract geometric shape.
 * This component accepts standard SVG properties.
 */
export function DefaultLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor">
        <path d="M50 0L0 100h25l25-50 25 50h25L50 0z" />
        <path d="M37.5 75h25L50 50 37.5 75z" />
      </g>
    </svg>
  );
}