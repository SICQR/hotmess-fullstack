import type React from 'react';

export type IconProps = {
  /**
   * sets the size of the icon.
   * @default 24
   */
  size?: number | string;

  /**
   * a class name to be passed to the icon component.
   */
  className?: string;

  /**
   * the color of the icon.
   * defaults to the current text color.
   */
  color?: string;

  /**
   * inline style for the icon component.
   */
  style?: React.CSSProperties;
  
  /**
   * a callback function to be called when the icon is clicked.
   */
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
};