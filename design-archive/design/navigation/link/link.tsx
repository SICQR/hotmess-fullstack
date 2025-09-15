import type { ReactNode, MouseEvent, CSSProperties } from 'react';

import classNames from 'classnames';
import styles from './link.module.scss';

export type LinkProps = {
  /**
   * The URL or path for the link. For internal navigation, this corresponds to the 'to' prop of React Router's Link.
   */
  href: string;

  /**
   * The content displayed within the link.
   */
  children?: ReactNode;

  /**
   * If set to true, the link will be treated as an external URL, rendering a standard `<a>` tag that opens in a new tab by default.
   * @default false
   */
  external?: boolean;

  /**
   * Specifies the browsing context for the link, e.g., '_blank', '_self'.
   * Primarily for external links. Defaults to '_blank' if `external` is true.
   */
  target?: string;

  /**
   * Defines the relationship between the linked document and the current one.
   * Primarily for external links. Defaults to 'noopener noreferrer' if `external` is true for security.
   */
  rel?: string;

  /**
   * Optional click event handler.
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;

  /**
   * Custom CSS class name to apply to the link element.
   */
  className?: string;

  /**
   * Custom inline styles to apply to the link element.
   */
  style?: CSSProperties;
};

/**
 * A versatile link component for both internal application routing and external URLs.
 * It integrates with React Router for seamless single-page navigation.
 */
export function Link({
  href,
  children,
  external = false,
  className,
  target,
  rel,
  style,
  onClick,
}: LinkProps) {
  const combinedClassName = classNames(styles.link, className);

  if (external) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={combinedClassName}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={href}
      className={combinedClassName}
      style={style}
      onClick={onClick}
    >
      {children}
  <a href={href} {...props}>{children}</a>