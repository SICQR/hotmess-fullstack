import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import type { SelectListItem } from './select-list-item-type.js';
import { ChevronDownIcon } from './chevron-down-icon.js';
import styles from './select-list.module.scss';

const defaultOptions: SelectListItem[] = [
  { value: 'option-1', label: 'Option One' },
  { value: 'option-2', label: 'Option Two' },
  { value: 'option-3', label: 'Option Three' },
  { value: 'option-4', label: 'Option Four' },
];

export type SelectListProps = {
  /**
   * A list of options to display in the dropdown.
   */
  options?: SelectListItem[];
  /**
   * Placeholder text to show when no option is selected.
   */
  placeholder?: string;
  /**
   * The currently selected value, making this a controlled component.
   */
  selectedValue?: string;
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect?: (value: string) => void;
  /**
   * Additional class name for the root element.
   */
  className?: string;
  /**
   * Custom styles for the root element.
   */
  style?: React.CSSProperties;
};

/**
 * A modern and customizable select list component.
 */
export function SelectList({
  options = defaultOptions,
  placeholder = 'Select an option',
  selectedValue,
  onSelect,
  className,
  style,
}: SelectListProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedLabel(selectedOption ? selectedOption.label : null);
  }, [selectedValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: SelectListItem) => {
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={selectRef}
      className={classNames(styles.selectListContainer, className)}
      style={style}
    >
      <button
        type="button"
        className={styles.selectDisplay}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={classNames(
            styles.selectedValue,
            !selectedLabel && styles.placeholder
          )}
        >
          {selectedLabel || placeholder}
        </span>
        <ChevronDownIcon
          className={classNames(styles.chevronIcon, isOpen && styles.chevronIconOpen)}
        />
      </button>

      {isOpen ? (
        <ul className={styles.dropdownList} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={classNames(
                styles.dropdownItem,
                option.value === selectedValue && styles.selectedItem
              )}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === selectedValue}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}