import type { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * The content to be displayed inside the card.
   */
  children?: ReactNode;

  /**
   * An optional title for the card, displayed above the children.
   */
  title?: string;

  /**
   * Optional content for the card's header section.
   */
  header?: ReactNode;

  /**
   * Optional content for the card's footer section.
   */
  footer?: ReactNode;

  /**
   * URL for an optional image to be displayed at the top of the card.
   */
  image?: string;

  /**
   * Alt text for the card image.
   */
  imageAlt?: string;

  /**
   * If true, the card will have an interactive hover effect.
   */
  interactive?: boolean;

  /**
   * Custom class name for the card container.
   */
  className?: string;

  /**
   * Custom styles for the card container.
   */
  style?: CSSProperties;
};

export function Card({
  children,
  title,
  header,
  footer,
  image,
  imageAlt = 'Card image',
  interactive = false,
  className,
  style,
}: CardProps) {
  return (
    <div
      className={classNames(
        styles.card,
        { [styles.interactive]: interactive },
        className
      )}
      style={style}
    >
      {image ? <img src={image} alt={imageAlt} className={styles.image} /> : null}
      {header ? <div className={styles.header}>{header}</div> : null}
      <div className={styles.content}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
        {children}
      </div>
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  );
}