import type React from 'react';

/**
 * Defines the props for an icon component.
 */
export type IconProps = {
  /**
   * a class name to be applied to the SVG element.
   */
  className?: string;
} & React.SVGAttributes<SVGElement>;