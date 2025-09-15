import type { ReactNode } from 'react';
import classNames from 'classnames';
import { Heading } from '@philip-gizzie/design.typography.heading';
import { Paragraph } from '@philip-gizzie/design.typography.paragraph';
import styles from './section-layout.module.scss';

export type SectionLayoutProps = {
  /**
   * The main content of the section.
   */
  children: ReactNode;
  /**
   * Optional title for the section, displayed as a large heading.
   */
  title?: ReactNode;
  /**
   * Optional caption displayed in uppercase above the title.
   */
  caption?: string;
  /**
   * Optional subtitle or description for the section, displayed below the title.
   */
  subtitle?: ReactNode;
  /**
   * Additional class name for custom styling on the root element.
   */
  className?: string;
};

/**
 * A visually striking and adaptable layout component for page sections.
 * It provides a structured header with an optional caption, title, and subtitle, followed by a content area.
 * This component is designed to elevate content presentation and create a strong visual hierarchy.
 */
export function SectionLayout({
  children,
  title,
  caption,
  subtitle,
  className,
}: SectionLayoutProps) {
  const hasHeaderContent = title || caption || subtitle;

  return (
    <section className={classNames(styles.sectionLayout, className)}>
      {hasHeaderContent ? (
        <header className={styles.header}>
          {caption && <span className={styles.caption}>{caption}</span>}
          {title && (
            <Heading level={2} visualLevel={1} className={styles.title}>
              {title}
            </Heading>
          )}
          {subtitle && (
            <Paragraph className={styles.subtitle}>{subtitle}</Paragraph>
          )}
        </header>
      ) : null}
      <div className={styles.content}>{children}</div>
    </section>
  );
}