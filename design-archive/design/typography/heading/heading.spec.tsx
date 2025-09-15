import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from './heading.js';
import styles from './heading.module.scss';

describe('Heading Component', () => {
  it('should render the correct heading level', () => {
    const { container } = render(<Heading level={1}>Test Heading</Heading>);
    const headingElement = container.querySelector('h1');
    expect(headingElement).toBeInTheDocument();
  });

  it('should apply the correct visual style based on visualLevel prop', () => {
    const { container } = render(<Heading level={1} visualLevel={3}>Test Heading</Heading>);
    const headingElement = container.querySelector('h1');
    expect(headingElement).toHaveClass(styles.h3);
  });

  it('should apply custom class name', () => {
    const { container } = render(<Heading level={1} className="custom-class">Test Heading</Heading>);
    const headingElement = container.querySelector('h1');
    expect(headingElement).toHaveClass('custom-class');
  });
});