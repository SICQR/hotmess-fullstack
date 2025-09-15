import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Tabs } from '@philip-gizzie/design.navigation.tabs';
import type { TabItem } from '@philip-gizzie/design.navigation.tabs';
import { PageLayout } from './page-layout.js';

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: 'var(--borders-radius-large)',
  objectFit: 'cover',
  maxHeight: '400px',
  marginTop: 'var(--spacing-large)',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--typography-font-family)',
  fontSize: 'var(--typography-sizes-heading-h3)',
  color: 'var(--colors-text-primary)',
  fontWeight: 'var(--typography-font-weight-semi-bold)',
  margin: '0 0 var(--spacing-default) 0',
};

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--typography-font-family)',
  fontSize: 'var(--typography-sizes-body-large)',
  color: 'var(--colors-text-secondary)',
  lineHeight: 'var(--typography-line-height-base)',
  margin: 0,
};

const sampleTabs: TabItem[] = [
  {
    label: 'Dashboard',
    component: (
      <div>
        <h3 style={headingStyle}>Dashboard Overview</h3>
        <p style={paragraphStyle}>
          This is your main dashboard. It provides a high-level overview of your application's state, including key metrics and recent activity. The layout is designed to be clean and intuitive.
        </p>
        <img
          src="https://images.unsplash.com/photo-1661028191560-3aa1f664f397?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMHdlYiUyMGxheW91dCUyMFVJJTIwZGVzaWdufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NzU3fDA&ixlib=rb-4.1.0"
          alt="Clean UI diagram"
          style={imageStyle}
        />
      </div>
    ),
  },
  {
    label: 'Analytics',
    component: (
      <div>
        <h3 style={headingStyle}>In-Depth Analytics</h3>
        <p style={paragraphStyle}>
          Dive deep into your data with our powerful analytics tools. Track user engagement, conversion rates, and performance metrics on a modern and responsive interface.
        </p>
        <img
          src="https://images.unsplash.com/photo-1647779098515-687bdba939e1?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw2fHxjbGVhbiUyMHdlYiUyMGxheW91dCUyMFVJJTIwZGVzaWdufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NzU3fDA&ixlib=rb-4.1.0"
          alt="Apple Studio Display showing analytics"
          style={imageStyle}
        />
      </div>
    ),
  },
  {
    label: 'Settings',
    component: (
      <div>
        <h3 style={headingStyle}>User Settings</h3>
        <p style={paragraphStyle}>
          Configure your personal and application settings here. Our layout ensures all options are easy to find and manage, providing a seamless user experience.
        </p>
        <img
          src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxjbGVhbiUyMHdlYiUyMGxheW91dCUyMFVJJTIwZGVzaWdufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NzU3fDA&ixlib=rb-4.1.0"
          alt="Smartphone with design definition"
          style={imageStyle}
        />
      </div>
    ),
  },
];

export const BasicPageLayout = () => {
  return (
    <PhilipGizzieTheme>
      <PageLayout
        title="Welcome to Our Application"
        description="A simple and clean page layout example."
      >
        <h1 style={headingStyle}>A Clean and Modern Layout</h1>
        <p style={paragraphStyle}>
          This is a basic example of the PageLayout component. It provides a consistent, responsive structure for any page content. The design prioritizes readability and a modern aesthetic, using flexible layout tokens to ensure consistency across the entire application.
        </p>
        <img
          src="https://images.unsplash.com/photo-1659123739225-ebc34dbdab0c?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdlYiUyMGxheW91dCUyMFVJJTIwZGVzaWdufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NzU3fDA&ixlib=rb-4.1.0"
          alt="Visual 3D Typography"
          style={imageStyle}
        />
      </PageLayout>
    </PhilipGizzieTheme>
  );
};

export const LayoutWithTabNavigation = () => {
  return (
    <PhilipGizzieTheme>
      <PageLayout
        title="Application Dashboard"
        description="Navigate through your application's features with our intuitive tab system."
        navigation={<Tabs tabs={sampleTabs} />}
      />
    </PhilipGizzieTheme>
  );
};

export const SeoOptimizedLayout = () => {
  return (
    <PhilipGizzieTheme>
      <PageLayout
        title="SEO Optimized Page | Full Stack Solutions"
        description="This page demonstrates the SEO capabilities of our PageLayout component, injecting meta tags for better search engine visibility."
        keywords="full stack, web development, seo, page layout, react, modern ui"
      >
        <h1 style={headingStyle}>Built for Search Engines</h1>
        <p style={paragraphStyle}>
          The PageLayout component automatically handles essential SEO meta tags using `react-helmet`. By providing `title`, `description`, and `keywords` props, you can easily improve your site's ranking on search engines. This example showcases a page fully optimized for discoverability.
        </p>
        <img
          src="https://images.unsplash.com/photo-1601919263076-4a6a8514c461?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxMHx8Y2xlYW4lMjB3ZWIlMjBsYXlvdXQlMjBVSSUyMGRlc2lnbnxlbnwxfDB8fGJsdWV8MTc1Nzg0Nzc1N3ww&ixlib=rb-4.1.0"
          alt="Clean desk setup with iMac"
          style={imageStyle}
        />
      </PageLayout>
    </PhilipGizzieTheme>
  );
};