import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './dropdown.module.scss';

export type DropdownProps = {
  /**
   * The content to be displayed inside the dropdown panel.
   * Interactive elements like buttons or links should have their own onClick handlers.
   */
  children?: React.ReactNode;

  /**
   * The component that triggers the dropdown to open.
   */
  placeholder: React.ReactNode;

  /**
   * Position of the dropdown panel relative to the placeholder.
   * Defaults to 'bottom-left'.
   */
  openPosition?: 'bottom-left' | 'bottom-right';

  /**
   * Optional class name for the dropdown container.
   */
  className?: string;

  /**
   * Optional inline styles for the dropdown container.
   */
  style?: React.CSSProperties;
};

export function Dropdown({
  children,
  placeholder,
  openPosition = 'bottom-left',
  className,
  style,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={classNames(styles.dropdownContainer, className)}
      style={style}
    >
      <button type="button" className={styles.placeholderWrapper} onClick={handleToggle}>
        {placeholder}
      </button>
      {isOpen ? (
        <div
          className={classNames(
            styles.dropdownPanel,
            styles[openPosition]
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}