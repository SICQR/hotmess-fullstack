import type { ReactNode, CSSProperties, MouseEvent } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonAppearance = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
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
  type?: ButtonType;

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
  appearance?: ButtonAppearance;

  /**
   * Custom inline styles to apply to the button.
   */
  style?: CSSProperties;
};

/**
 * A versatile and accessible button component that can be rendered as a button or a link.
 * It supports primary, secondary, and tertiary visual styles.
 */
export function Button({
  children,
  onClick,
  type = 'button',
  href,
  disabled = false,
  external = false,
  className,
  appearance = 'primary',
  style,
}: ButtonProps): React.JSX.Element {
  const buttonClassNames = classNames(
    styles.button,
    styles[appearance],
    { [styles.disabled]: disabled },
    className
  );

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClassNames}
        style={style}
        onClick={handleLinkClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClassNames}
      onClick={onClick as (event: MouseEvent<HTMLButtonElement>) => void}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}