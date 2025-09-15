import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from './paragraph.js';
import styles from './paragraph.module.scss';

describe('Paragraph', () => {
  it('should render a paragraph with the default element', () => {
    const { container } = render(<Paragraph>Hello, world!</Paragraph>);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass(styles.paragraph);
    expect(paragraph).toHaveTextContent('Hello, world!');
  });

  it('should render a paragraph with a custom element', () => {
    const { container } = render(<Paragraph element="span">Hello, world!</Paragraph>);
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass(styles.paragraph);
    expect(span).toHaveTextContent('Hello, world!');
  });

  it('should render a paragraph with a custom class name', () => {
    const { container } = render(<Paragraph className="custom-class">Hello, world!</Paragraph>);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass(styles.paragraph);
    expect(paragraph).toHaveClass('custom-class');
    expect(paragraph).toHaveTextContent('Hello, world!');
  });
});