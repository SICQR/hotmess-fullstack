import type { ReactNode, MouseEvent, CSSProperties } from 'react';
import { Button } from '@philip-gizzie/design.actions.button';
import classNames from 'classnames';
import styles from './cta-button.module.scss';

export type CtaButtonAppearance = 'primary' | 'secondary' | 'tertiary';
export type CtaButtonType = 'button' | 'submit' | 'reset';

export type CtaButtonProps = {
  /**
   * The content to be displayed inside the button.
   */
  children?: ReactNode;

  /**
   * A callback function to be executed when the button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /**
   * The native HTML button type. This is ignored if 'href' is provided.
   * Defaults to 'button'.
   */
  type?: CtaButtonType;

  /**
   * If provided, the button will be rendered as a link.
   */
  href?: string;

  /**
   * Disables the button, making it non-interactive.
   * Defaults to false.
   */
  disabled?: boolean;

  /**
   * If true, the link will open in a new tab. Only applicable when 'href' is set.
   * Defaults to false.
   */
  external?: boolean;

  /**
   * Additional class names to apply to the button.
   */
  className?: string;

  /**
   * The visual style of the button.
   * Defaults to 'primary'.
   */
  appearance?: CtaButtonAppearance;

  /**
   * Custom inline styles to apply to the button.
   */
  style?: CSSProperties;
};

/**
 * A visually compelling and highly interactive Call-to-Action (CTA) button
 * designed to grab user attention and encourage clicks. It builds upon a
 * versatile base button, adding enhanced styling and animations.
 */
export function CtaButton({
  children,
  onClick,
  type = 'button',
  href,
  disabled = false,
  external = false,
  className,
  appearance = 'primary',
  style,
}: CtaButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      href={href}
      disabled={disabled}
      external={external}
      className={classNames(styles.ctaButton, className)}
      appearance={appearance}
      style={style}
    >
      {children}
    </Button>
  );
}