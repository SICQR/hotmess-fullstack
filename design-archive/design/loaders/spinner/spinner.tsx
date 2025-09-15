import type { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './spinner.module.scss';

export type SpinnerProps = {
  /**
   * The size of the spinner.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * A custom class name to be applied to the spinner.
   */
  className?: string;

  /**
   * Inline styles to be applied to the spinner.
   * Useful for overriding properties like color.
   */
  style?: CSSProperties;
};

/**
 * A visually appealing and subtle spinner component for indicating loading states.
 * It uses a smooth CSS animation to create a rotating arc.
 * @example
 * <Spinner size="large" style={{ borderColor: 'var(--colors-status-positive-default)', borderBottomColor: 'transparent' }} />
 */
export function Spinner({
  size = 'medium',
  className,
  style,
}: SpinnerProps): React.JSX.Element {
  return (
    <div
      className={classNames(styles.spinner, styles[size], className)}
      style={style}
      role="status"
      aria-live="polite"
    >
      <span className={styles.visuallyHidden}>Loading...</span>
    </div>
  );
}