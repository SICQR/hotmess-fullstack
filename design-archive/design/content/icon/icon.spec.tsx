import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Icon } from './icon.js';
import styles from './icon.module.scss';

describe('Icon Component', () => {
  it('should render the icon with default size', () => {
    const { container } = render(
      <Icon>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </Icon>
    );
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  it('should render the icon with a custom size', () => {
    const { container } = render(
      <Icon size={32}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </Icon>
    );
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });

  it('should handle onClick event', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Icon onClick={onClick}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </Icon>
    );
    const svgElement = container.querySelector('svg');
    if (svgElement) {
      fireEvent.click(svgElement);
    }
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(svgElement).toHaveClass(styles.clickable);
  });
});