import React from 'react';
import { render } from '@testing-library/react';
import { SectionLayout } from './section-layout.js';
import styles from './section-layout.module.scss';

describe('SectionLayout', () => {
  it('should render children correctly', () => {
    const { container } = render(
      <SectionLayout>
        <div data-testid="content">Hello World</div>
      </SectionLayout>
    );
    const content = container.querySelector('[data-testid="content"]');
    expect(content).toBeTruthy();
    expect(content?.textContent).toBe('Hello World');
  });

  it('should render title, caption, and subtitle when provided', () => {
    const { container } = render(
      <SectionLayout
        title="Section Title"
        caption="Section Caption"
        subtitle="Section Subtitle"
      >
        <div>Content</div>
      </SectionLayout>
    );

    const caption = container.querySelector(`.${styles.caption}`);
    const title = container.querySelector(`.${styles.title}`);
    const subtitle = container.querySelector(`.${styles.subtitle}`);

    expect(caption).toBeTruthy();
    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();

    expect(caption?.textContent).toBe('Section Caption');
    expect(title?.textContent).toBe('Section Title');
    expect(subtitle?.textContent).toBe('Section Subtitle');
  });

  it('should apply custom class name to the root element', () => {
    const { container } = render(
      <SectionLayout className="custom-class">
        <div>Content</div>
      </SectionLayout>
    );
    const section = container.querySelector('.custom-class');
    expect(section).toBeTruthy();
  });
});