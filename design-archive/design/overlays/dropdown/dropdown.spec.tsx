import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from './dropdown.js';
import styles from './dropdown.module.scss';

describe('Dropdown Component', () => {
  it('should open and close the dropdown panel on placeholder click', () => {
    const placeholderText = 'Open Dropdown';
    const { container } = render(
      <Dropdown placeholder={<button>{placeholderText}</button>}>
        <div>Dropdown Content</div>
      </Dropdown>
    );

    const placeholderButton = container.querySelector('button');
    expect(placeholderButton).toHaveTextContent(placeholderText);

    // Initially, dropdown panel should not be present
    expect(container.querySelector(`.${styles.dropdownPanel}`)).not.toBeInTheDocument();

    // Open the dropdown
    fireEvent.click(placeholderButton as Element);
    expect(container.querySelector(`.${styles.dropdownPanel}`)).toBeInTheDocument();

    // Close the dropdown
    fireEvent.click(placeholderButton as Element);
    expect(container.querySelector(`.${styles.dropdownPanel}`)).not.toBeInTheDocument();
  });

  it('should close the dropdown when clicking outside the dropdown', () => {
    const placeholderText = 'Open Dropdown';
    const { container } = render(
      <Dropdown placeholder={<button>{placeholderText}</button>}>
        <div>Dropdown Content</div>
      </Dropdown>
    );

    const placeholderButton = container.querySelector('button');
    fireEvent.click(placeholderButton as Element);
    expect(container.querySelector(`.${styles.dropdownPanel}`)).toBeInTheDocument();

    // Simulate a click outside the dropdown
    fireEvent.mouseDown(document.body);
    expect(container.querySelector(`.${styles.dropdownPanel}`)).not.toBeInTheDocument();
  });

  it('should apply the correct open position class', () => {
    const { container } = render(
      <Dropdown placeholder={<button>Open Dropdown</button>} openPosition="bottom-right">
        <div>Dropdown Content</div>
      </Dropdown>
    );

    const placeholderButton = container.querySelector('button');
    fireEvent.click(placeholderButton as Element);

    const dropdownPanel = container.querySelector(`.${styles.dropdownPanel}`);
    expect(dropdownPanel).toHaveClass(styles['bottom-right']);
  });
});