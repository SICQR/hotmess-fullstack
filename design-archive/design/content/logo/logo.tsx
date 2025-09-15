import type { CSSProperties } from 'react';
import { Link } from '@philip-gizzie/design.navigation.link';
import classNames from 'classnames';
import { DefaultLogo } from './default-logo.js';
import styles from './logo.module.scss';

export type LogoProps = {
  /**
   * The name to display in the logo. Defaults to 'Acme'.
   */
  name?: string;

  /**
   * The URL to navigate to when the logo is clicked. If provided, the logo becomes a clickable link.
   */
  href?: string;

  /**
   * The size of the logo image in pixels.
   * @default 32
   */
  logoSize?: number;

  /**
   * The slogan to display below the name.
   */
  slogan?: string;

  /**
   * Optional source for an SVG or image logo. Overrides the default logo.
   */
  src?: string;

  /**
   * If true, displays only the logo image/SVG without the name and slogan.
   * @default false
   */
  minimal?: boolean;

  /**
   * Custom CSS class name to apply to the root element.
   */
  className?: string;

  /**
   * Custom inline styles to apply to the root element.
   */
  style?: CSSProperties;
};

/**
 * A versatile and brand-conscious logo component.
 * It displays the company logo and name, with options for a slogan, custom image, and different sizes.
 * It can be rendered as a link or a static element.
 */
export function Logo({
  name = 'Acme',
  href,
  logoSize = 32,
  slogan,
  src,
  minimal = false,
  className,
  style,
}: LogoProps) {
  const logoImageStyle = {
    width: `${logoSize}px`,
    height: `${logoSize}px`,
  };

  const LogoImage = src ? (
    <img
      src={src}
      alt={`${name} logo`}
      style={logoImageStyle}
      className={styles.logoImage}
    />
  ) : (
    <DefaultLogo style={logoImageStyle} className={styles.logoImage} />
  );

  const content = (
    <>
      {LogoImage}
      {!minimal && (
        <div className={styles.textContainer}>
          <span className={styles.name}>{name}</span>
          {slogan && <span className={styles.slogan}>{slogan}</span>}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classNames(styles.logo, className)}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={classNames(styles.logo, className)} style={style}>
      {content}
    </div>
  );
}