import * as React from 'react';

/**
 * ChevronDownIcon component for the dropdown indicator.
 * @param props - SVG properties.
 */
export function ChevronDownIcon({
  width = '20',
  height = '20',
  ...rest
}: React.SVGProps<SVGSVGElement>): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}