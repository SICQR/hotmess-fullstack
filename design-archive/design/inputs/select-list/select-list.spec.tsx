import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectList } from './select-list.js';
import type { SelectListItem } from './select-list-item-type.js';
import styles from './select-list.module.scss';

describe('SelectList', () => {
  const options: SelectListItem[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('should display the placeholder when no option is selected', () => {
    const { getByText } = render(<SelectList options={options} placeholder="Select an option" />);
    expect(getByText('Select an option')).toBeInTheDocument();
  });

  it('should open the dropdown when the select display is clicked', () => {
    const { container } = render(<SelectList options={options} />);
    const selectDisplay = container.querySelector(`.${styles.selectDisplay}`);
    fireEvent.click(selectDisplay as Element);
    const dropdownList = container.querySelector(`.${styles.dropdownList}`);
    expect(dropdownList).toBeInTheDocument();
  });

  it('should call onSelect when an option is clicked', () => {
    const onSelect = vi.fn();
    const { container } = render(<SelectList options={options} onSelect={onSelect} />);
    const selectDisplay = container.querySelector(`.${styles.selectDisplay}`);
    fireEvent.click(selectDisplay as Element);
    const dropdownItem = container.querySelector(`.${styles.dropdownItem}`);
    fireEvent.click(dropdownItem as Element);
    expect(onSelect).toHaveBeenCalledWith('option1');
  });
});