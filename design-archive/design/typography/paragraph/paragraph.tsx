import type { ReactNode, ElementType, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
  /**
   * The content to be rendered inside the paragraph.
   */
  children: ReactNode;

  /**
   * The HTML element to use for the paragraph.
   * @default p
   */
  element?: ElementType;

  /**
   * A custom class name to be applied to the component.
   */
  className?: string;

  /**
   * Custom inline styles to be applied to the component.
   */
  style?: CSSProperties;
};

/**
 * A versatile paragraph component for displaying text with consistent typography.
 * This component prioritizes readability and can be rendered as different HTML elements.
 * @example
 * <Paragraph>This is a standard paragraph.</Paragraph>
 * @example
 * <Paragraph element="span">This is a paragraph rendered as a span.</Paragraph>
 */
export function Paragraph({
  element: Component = 'p',
  children,
  className,
  style,
}: ParagraphProps) {
  return (
    <Component className={classNames(styles.paragraph, className)} style={style}>
      {children}
    </Component>
  );
}