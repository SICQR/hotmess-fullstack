import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Card } from './card.js';

const CompositionWrapper = ({ children }: { children: React.ReactNode }) => (
  <PhilipGizzieTheme>
    <div
      style={{
        padding: 'var(--spacing-xl)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '400px',
        width: '100%',
      }}
    >
      <div style={{ width: '100%', maxWidth: '360px' }}>{children}</div>
    </div>
  </PhilipGizzieTheme>
);

export const BasicCard = () => {
  return (
    <CompositionWrapper>
      <Card title="Basic Information Card">
        <p
          style={{
            margin: 0,
            color: 'var(--colors-text-secondary)',
            fontSize: 'var(--typography-sizes-body-default)',
          }}
        >
          This is a simple card component. It serves as a container for content,
          featuring a title and a body section. Use it to display concise pieces
          of information.
        </p>
      </Card>
    </CompositionWrapper>
  );
};

export const CardWithImage = () => {
  return (
    <CompositionWrapper>
      <Card
        image="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwxfDB8fGJsdWV8MTc1Nzg0NzQ4OXww&ixlib=rb-4.1.0"
        imageAlt="Yellow and white abstract painting"
        title="Card With a Visual"
      >
        <p
          style={{
            margin: 0,
            color: 'var(--colors-text-secondary)',
            fontSize: 'var(--typography-sizes-body-default)',
          }}
        >
          Including an image can make the card more engaging and visually
          appealing. The image is displayed at the top of the card.
        </p>
      </Card>
    </CompositionWrapper>
  );
};

export const FullFeaturedInteractiveCard = () => {
  return (
    <CompositionWrapper>
      <Card
        interactive
        image="https://images.unsplash.com/photo-1650611250959-1e823abf6841?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMGJsdWUlMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwxfDB8fGJsdWV8MTc1Nzg0NzQ4OXww&ixlib=rb-4.1.0"
        imageAlt="Abstract folded form inspired by windows 11 wallpapers"
        header={
          <span
            style={{
              fontSize: 'var(--typography-sizes-caption-default)',
              color: 'var(--colors-text-secondary)',
            }}
          >
            Featured Post
          </span>
        }
        footer={
          <span
            style={{
              fontSize: 'var(--typography-sizes-body-small)',
              fontWeight: 'var(--typography-font-weight-semi-bold)',
              color: 'var(--colors-primary-default)',
            }}
          >
            Read More
          </span>
        }
        title="Interactive Full-Featured Card"
      >
        <p
          style={{
            margin: 0,
            color: 'var(--colors-text-secondary)',
            fontSize: 'var(--typography-sizes-body-default)',
          }}
        >
          This card is interactive and includes a header and a footer. It's
          perfect for previews of articles, products, or any content that links
          to a more detailed view.
        </p>
      </Card>
    </CompositionWrapper>
  );
};