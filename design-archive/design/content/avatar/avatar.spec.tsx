import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar.js';
import styles from './avatar.module.scss';

describe('Avatar', () => {
  it('should render with an image when src is provided', () => {
    const { container } = render(<Avatar src="test.jpg" name="Test User" />);
    const imgElement = container.querySelector(`.${styles.avatarImage}`) as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain("test.jpg");
    expect(imgElement.alt).toBe("Test User");
  });

  it('should render with initials when src is not provided', () => {
    const { container } = render(<Avatar name="Jane Doe" src={undefined} />);
    const initialsElement = container.querySelector(`.${styles.avatarInitials}`) as HTMLDivElement;
    expect(initialsElement).toBeInTheDocument();
    expect(initialsElement.textContent).toBe("JD");
  });

  it('should display status dot when status prop is provided', () => {
    const { container } = render(<Avatar name="Test User" status="online" />);
    const statusDotElement = container.querySelector(`.${styles.statusDot}`) as HTMLDivElement;
    expect(statusDotElement).toBeInTheDocument();
    expect(statusDotElement.classList.contains(styles.online)).toBe(true);
  });
});