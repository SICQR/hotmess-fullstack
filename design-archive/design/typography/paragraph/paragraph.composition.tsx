import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Paragraph } from './paragraph.js';

export const BasicParagraph = () => {
  return (
    <PhilipGizzieTheme>
      <Paragraph>
        When building a full-stack application, every component matters. This paragraph component, for instance, ensures that all your text content is rendered with consistent, readable, and accessible typography. It's a foundational piece for a high-quality user interface, seamlessly integrating with your design system's tokens for colors and fonts.
      </Paragraph>
    </PhilipGizzieTheme>
  );
};

export const ParagraphAsDifferentElement = () => {
  return (
    <PhilipGizzieTheme>
      <div>
        <Paragraph element="span">
          This text is inside a `span` element, making it suitable for inline usage.
        </Paragraph>
        {' '}This allows it to flow naturally with other text elements, like this regular text node.
      </div>
    </PhilipGizzieTheme>
  );
};

export const HighlightedParagraph = () => {
  return (
    <PhilipGizzieTheme>
      <Paragraph
        style={{
          padding: 'var(--spacing-default)',
          backgroundColor: 'var(--colors-surface-secondary)',
          borderLeft: `4px solid var(--colors-primary-default)`,
          borderRadius: 'var(--borders-radius-medium)'
        }}
      >
        By using the `className` or `style` props, you can easily create variations. This example shows a highlighted block, perfect for quotes or important notes within your application's documentation or user guides. This flexibility is key to building a rich and dynamic full-stack experience.
      </Paragraph>
    </PhilipGizzieTheme>
  );
};