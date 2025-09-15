import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import styles from './page-layout.module.scss';

export type PageLayoutProps = {
  /**
   * The content to be rendered within the main area of the layout.
   */
  children?: ReactNode;

  /**
   * The navigation element to be rendered, typically at the top of the content area.
   */
  navigation?: ReactNode;

  /**
   * The title of the page, injected into the document head for SEO and browser tab.
   */
  title: string;

  /**
   * The meta description for SEO purposes, injected into the document head.
   */
  description?: string;

  /**
   * Comma-separated keywords for SEO, injected into the document head.
   */
  keywords?: string;

  /**
   * Custom CSS class name for the root element to allow for style overrides.
   */
  className?: string;

  /**
   * Custom inline styles for the root element.
   */
  style?: React.CSSProperties;
};

/**
 * A responsive page layout component that provides a consistent structure for pages,
 * including a main content area and an optional inner navigation section.
 * It also handles SEO-related head tags like title and meta description.
 */
export function PageLayout({
  title,
  description,
  keywords,
  children,
  navigation,
  className,
  style,
}: PageLayoutProps) {
  return (
    <div className={classNames(styles.pageLayout, className)} style={style}>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>
      {navigation ? (
        <nav className={styles.navigationContainer}>{navigation}</nav>
      ) : null}
      <main className={styles.contentArea}>{children}</main>
    </div>
  );
}