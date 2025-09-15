import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Heading } from './heading.js';

export const AllHeadingLevels = () => (
  <PhilipGizzieTheme>
    <div style={{ padding: 'var(--spacing-large)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-default)' }}>
      <Heading level={1}>Heading Level 1: Full Stack Solutions</Heading>
      <Heading level={2}>Heading Level 2: Building Modern Web Applications</Heading>
      <Heading level={3}>Heading Level 3: API Development and Integration</Heading>
      <Heading level={4}>Heading Level 4: Database Schema Design</Heading>
      <Heading level={5}>Heading Level 5: Component Library</Heading>
      <Heading level={6}>Heading Level 6: Utility Functions</Heading>
    </div>
  </PhilipGizzieTheme>
);

export const DecoupledSemanticAndVisualHeadings = () => (
  <PhilipGizzieTheme>
    <div style={{ padding: 'var(--spacing-large)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-large)' }}>
      <div>
        <Heading level={1} visualLevel={3}>
          Semantic H1, Visual H3
        </Heading>
        <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', margin: 'var(--spacing-small) 0 0 0', fontSize: 'var(--typography-sizes-body-default)' }}>
          This is useful for SEO when the main title of the page shouldn't be the largest text element.
        </p>
      </div>
      <div>
        <Heading level={4} visualLevel={2}>
          Semantic H4, Visual H2
        </Heading>
        <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', margin: 'var(--spacing-small) 0 0 0', fontSize: 'var(--typography-sizes-body-default)' }}>
          Conversely, this can be used for section titles that need to stand out visually but are less important in the document hierarchy.
        </p>
      </div>
    </div>
  </PhilipGizzieTheme>
);

export const HeadingWithCustomStyling = () => (
  <PhilipGizzieTheme>
    <style>{`
      .custom-heading-color {
        color: var(--colors-primary-default);
        border-bottom: 1px solid var(--colors-primary-default);
        display: inline-block;
        padding-bottom: var(--spacing-small);
      }
    `}</style>
    <div style={{ padding: 'var(--spacing-large)' }}>
      <Heading level={2} className="custom-heading-color">
        Custom Styled Heading
      </Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', marginTop: 'var(--spacing-default)', fontSize: 'var(--typography-sizes-body-default)' }}>
        You can easily extend styles using the className prop.
      </p>
    </div>
  </PhilipGizzieTheme>
);