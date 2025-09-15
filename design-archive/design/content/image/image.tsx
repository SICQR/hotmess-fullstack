import type { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type ImageProps = {
  /**
   * The source URL of the image to display.
   */
  src: string;

  /**
   * Alternative text for the image, crucial for accessibility.
   */
  alt: string;

  /**
   * The native width of the image.
   */
  width?: string | number;

  /**
   * The native height of the image.
   */
  height?: string | number;

  /**
   * Additional class names to apply to the image for custom styling.
   */
  className?: string;

  /**
   * Inline styles to apply to the image element.
   */
  style?: CSSProperties;
};

/**
 * A responsive and visually appealing image component.
 * It ensures images scale correctly within their containers while providing
 * a modern look with rounded corners and a subtle shadow.
 * @param src The source URL of the image.
 * @param alt Alternative text for accessibility.
 * @param width The native width of the image.
 * @param height The native height of the image.
 * @param className Custom class name for styling.
 * @param style Inline styles for the image.
 */
export function Image({
  src,
  alt,
  width,
  height,
  className,
  style,
}: ImageProps): React.JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(styles.image, className)}
      style={style}
    />
  );
}