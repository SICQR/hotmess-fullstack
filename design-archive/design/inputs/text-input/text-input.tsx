import React, { type ChangeEvent, type CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './text-input.module.scss';

export type TextInputProps = {
  /**
   * a unique identifier for the input element.
   */
  id?: string;

  /**
   * the current value of the input.
   */
  value?: string;

  /**
   * callback function that is fired when the input value changes.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * placeholder text for the input.
   */
  placeholder?: string;

  /**
   * the type of the input element.
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';

  /**
   * the name attribute for the input element.
   */
  name?: string;

  /**
   * optional custom class name to be added to the component.
   */
  className?: string;

  /**
   * optional inline styles.
   */
  style?: CSSProperties;
};

export function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  className,
  style,
}: TextInputProps) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className={classNames(styles.textInput, className)}
    />
  );
}