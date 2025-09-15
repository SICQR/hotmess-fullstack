import type { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './badge.module.scss';

/**
 * Defines the visual style of the badge.
 * `filled`: A badge with a solid background color.
 * `outlined`: A badge with a transparent background and a colored border.
 */
export type BadgeVariant = 'filled' | 'outlined';

/**
 * Defines the size of the badge, affecting padding and font size.
 * `small`: The smallest badge size.
 * `medium`: The default badge size.
 * `large`: The largest badge size.
 */
export type BadgeSize = 'small' | 'medium' | 'large';

/**
 * Defines the color palette of the badge.
 * This corresponds to theme colors for different states or categories.
 */
export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'info'
  | 'default';

export type BadgeProps = {
  /**
   * The text content to be displayed inside the badge.
   */
  label: string;

  /**
   * An optional icon element to be displayed before the label.
   */
  icon?: ReactNode;

  /**
   * Specifies the visual style of the badge.
   * @default 'filled'
   */
  variant?: BadgeVariant;

  /**
   * Specifies the size of the badge.
   * @default 'medium'
   */
  size?: BadgeSize;

  /**
   * Specifies the color theme of the badge.
   * @default 'default'
   */
  color?: BadgeColor;

  /**
   * Additional CSS class name(s) to apply to the badge component.
   */
  className?: string;

  /**
   * Inline CSS styles to apply to the badge component.
   */
  style?: React.CSSProperties;
};

/**
 * A versatile and visually distinct badge component for displaying statuses, labels, or categories.
 * It supports different variants, sizes, colors, and an optional icon.
 */
export function Badge({
  label,
  icon,
  variant = 'filled',
  size = 'medium',
  color = 'default',
  className,
  style,
}: BadgeProps): React.JSX.Element {
  const badgeClasses = classNames(
    styles.badge,
    styles[variant],
    styles[size],
    styles[color],
    className
  );

  return (
    <div className={badgeClasses} style={style}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{label}</span>
    </div>
  );
}