import React from 'react';
import { render, screen } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import { PageLayout } from './page-layout.js';
import styles from './page-layout.module.scss';

describe('PageLayout', () => {
  it('should render title in the document head', () => {
    const title = 'Test Title';
    render(<PageLayout title={title} />);
    const helmet = Helmet.peek();
    expect(helmet?.title).toBe(title);
  });

  it('should render description in the document head', () => {
    const description = 'Test Description';
    render(<PageLayout title="Dummy Title" description={description} />);
    const helmet = Helmet.peek();
    expect(helmet?.metaTags.find(tag => tag.name === 'description')?.content).toBe(description);
  });

  it('should render children within the content area', () => {
    const text = 'Hello, World!';
    const { container } = render(
      <PageLayout title="Dummy Title">
        <div>{text}</div>
      </PageLayout>
    );
    const contentArea = container.querySelector(`.${styles.contentArea}`);
    expect(contentArea?.textContent).toContain(text);
  });
});