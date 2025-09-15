import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image } from './image.js';
import styles from './image.module.scss';

describe('Image Component', () => {
  it('should render an image with src and alt attributes', () => {
    const src = 'test-image.jpg';
    const alt = 'Test image';
    render(<Image src={src} alt={alt} />);
    const imageElement = screen.getByAltText(alt);
    expect(imageElement).toBeInTheDocument();
    expect((imageElement as HTMLImageElement).src).toContain(src);
  });

  it('should apply custom class names', () => {
    const className = 'custom-class';
    render(<Image src="test-image.jpg" alt="Test image" className={className} />);
    const imageElement = screen.getByAltText('Test image');
    expect(imageElement).toHaveClass(className);
    expect(imageElement).toHaveClass(styles.image);
  });

  it('should render with width and height', () => {
    const width = '300';
    const height = '200';
    render(<Image src="test-image.jpg" alt="Test image" width={width} height={height} />);
    const imageElement = screen.getByAltText('Test image');
    expect((imageElement as HTMLImageElement).width.toString()).toBe(width);
    expect((imageElement as HTMLImageElement).height.toString()).toBe(height);
  });
});