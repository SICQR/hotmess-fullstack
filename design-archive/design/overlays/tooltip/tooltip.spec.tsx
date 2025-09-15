import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './tooltip.js';
import styles from './tooltip.module.scss';

describe('Tooltip', () => {
  it('should render children', () => {
    const { container } = render(
      <Tooltip text="Test tooltip">
        <button>Test Button</button>
      </Tooltip>
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('should show tooltip on mouse enter and hide on mouse leave', () => {
    const { container } = render(
      <Tooltip text="Test tooltip">
        <button>Test Button</button>
      </Tooltip>
    );

    const tooltipContainer = container.querySelector(`.${styles.tooltipContainer}`);
    expect(tooltipContainer).toBeInTheDocument();

    fireEvent.mouseEnter(tooltipContainer as Element);
    const tooltipBox = container.querySelector(`.${styles.tooltipBox}`);
    expect(tooltipBox).toBeInTheDocument();
    expect(tooltipBox).toHaveTextContent('Test tooltip');

    fireEvent.mouseLeave(tooltipContainer as Element);
    const tooltipBoxAfterLeave = container.querySelector(`.${styles.tooltipBox}`);
    expect(tooltipBoxAfterLeave).toBeNull();
  });

  it('should apply the correct position class', () => {
    const { container } = render(
      <Tooltip text="Test tooltip" position="bottom">
        <button>Test Button</button>
      </Tooltip>
    );

    const tooltipContainer = container.querySelector(`.${styles.tooltipContainer}`);
    fireEvent.mouseEnter(tooltipContainer as Element);
    const tooltipBox = container.querySelector(`.${styles.tooltipBox}`);

    expect(tooltipBox).toHaveClass(styles.bottom);
  });
});