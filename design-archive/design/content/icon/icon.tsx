import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';
import type { IconProps } from './icon-props-type.js';
import styles from './icon.module.scss';

/**
 * Extends the base IconProps with SVG attributes and children for the generic Icon component.
 */
export type GenericIconProps = IconProps & Omit<React.SVGAttributes<SVGSVGElement>, 'onClick' | 'color' | 'style'> & {
  /**
   * The SVG content (e.g., path, circle) to be rendered inside the icon.
   */
  children: ReactNode;
};

/**
 * A generic icon component that serves as a base for creating specific icons.
 * It handles sizing, coloring, and interaction states, wrapping the provided SVG content.
 * @param {GenericIconProps} props - The properties for the Icon component.
 * @returns {React.JSX.Element} - The rendered SVG icon.
 */
export function Icon({
  size = 24,
  className,
  children,
  onClick,
  color,
  style,
  ...rest
}: GenericIconProps): React.JSX.Element {
  const iconStyle = {
    width: size,
    height: size,
    color,
    ...style,
  } as React.CSSProperties;

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classNames(
        styles.icon,
        { [styles.clickable]: !!onClick },
        className
      )}
      style={iconStyle}
      onClick={onClick}
      role="img"
    >
      {children}
    </svg>
  );
}