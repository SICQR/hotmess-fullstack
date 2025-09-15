import React, { useState, type ReactNode, type CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './tooltip.module.scss';

export type TooltipProps = {
  /**
   * The content that triggers the tooltip on hover.
   */
  children: ReactNode;

  /**
   * The text to display inside the tooltip.
   */
  text: string;

  /**
   * The position of the tooltip relative to the trigger element.
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Custom class name for the tooltip container.
   */
  className?: string;

  /**
   * Custom inline styles for the tooltip container.
   */
  style?: CSSProperties;
};

/**
 * A component that displays a short, informative message when a user hovers over an element.
 * It provides a modern and clean look with subtle animations.
 */
export function Tooltip({
  children,
  text,
  position = 'top',
  className,
  style,
}: TooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => {
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className={classNames(styles.tooltipContainer, className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      style={style}
    >
      {children}
      {isTooltipVisible ? (
        <span className={classNames(styles.tooltipBox, styles[position])}>
          {text}
        </span>
      ) : null}
    </div>
  );
}