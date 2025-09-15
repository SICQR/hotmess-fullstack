import React from 'react';
import classNames from 'classnames';
import type { AvatarStatus } from './avatar-status-type.js';
import styles from './avatar.module.scss';

export type AvatarProps = {
  /**
   * The source URL for the avatar image. If not provided, initials will be displayed.
   */
  src?: string;

  /**
   * Alternate text for the image. If not provided, the name will be used.
   */
  alt?: string;

  /**
   * The name of the user. Used for alt text and to generate initials if an image source is not available.
   */
  name?: string;

  /**
   * The size of the avatar in pixels.
   */
  size?: number;

  /**
   * The online status of the user, which displays a colored dot.
   */
  status?: AvatarStatus;

  /**
   * Additional class names to apply to the avatar container.
   */
  className?: string;

  /**
   * Inline styles to apply to the avatar container.
   */
  style?: React.CSSProperties;
};

const getInitials = (name: string): string => {
  const nameParts = name.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length === 0) return '';
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (
    nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)
  ).toUpperCase();
};

export function Avatar({
  src, // Removed default value here to allow src to be truly undefined
  alt,
  name = 'Philip Gizzie',
  size = 48,
  status,
  className,
  style,
}: AvatarProps) {
  const initials = getInitials(name);
  const finalAlt = alt || name || 'User Avatar';

  const dynamicStyles = {
    '--avatar-size': `${size}px`,
    '--avatar-font-size': `${size / 2.5}px`,
    ...style,
  } as React.CSSProperties;

  return (
    <div
      className={classNames(styles.avatarContainer, className)}
      style={dynamicStyles}
    >
      {src ? (
        <img src={src} alt={finalAlt} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarInitials} aria-label={finalAlt}>
          {initials}
        </div>
      )}
      {status ? (
        <div className={classNames(styles.statusDot, styles[status])} />
      ) : null}
    </div>
  );
}