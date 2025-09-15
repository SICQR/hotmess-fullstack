import React from 'react';

export type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function CheckIcon({ className, style }: IconProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}