import type { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * The semantic heading level (1-6), determining the HTML tag (e.g., h1, h2).
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The visual heading level (1-6). Decouples visual style from the semantic tag.
   * If not provided, it defaults to the semantic `level`.
   */
  visualLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The content to be displayed within the heading.
   */
  children?: ReactNode;
  /**
   * Additional class name for custom styling.
   */
  className?: string;
  /**
   * Inline styles for the component.
   */
  style?: CSSProperties;
};

const visualLevelMap = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
};

/**
 * A semantic and visually consistent heading component that enhances content structure and readability.
 * It allows decoupling the semantic HTML tag from its visual representation.
 * @param {HeadingProps} props - The props for the Heading component.
 * @returns {React.JSX.Element} - The rendered heading element.
 */
export function Heading({
  level,
  visualLevel,
  children,
  className,
  style,
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const effectiveVisualLevel = visualLevel || level;

  return (
    <Tag
      className={classNames(
        styles.heading,
        visualLevelMap[effectiveVisualLevel],
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}