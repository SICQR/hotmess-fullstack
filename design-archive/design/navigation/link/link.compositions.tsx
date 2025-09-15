import React from 'react';

import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Link } from './link.js';

export const BasicInternalLink = () => (
  <PhilipGizzieTheme>
    <MemoryRouter>
      <Link href="/home">Navigate to Home</Link>
  <Link href="/home">Home</Link>

export const ExternalLink = () => (
  <PhilipGizzieTheme>
    <MemoryRouter>
      <Link href="https://bit.dev" external>
        Go to Bit.dev
      </Link>
  <Link href="https://example.com">Example</Link>

export const LinkWithinText = () => (
  <PhilipGizzieTheme>
    <MemoryRouter>
      <p
        style={{
          color: 'var(--colors-text-primary)',
          fontFamily: 'var(--typography-font-family)',
          fontSize: 'var(--typography-sizes-body-default)',
        }}
      >
        This is a paragraph that contains an{' '}
        <Link href="/internal-documentation">internal link</Link> and also an{' '}
        <Link href="https://google.com" external>
          external link to Google
        </Link>
        . Notice how they blend with the text.
      </p>
    </MemoryRouter>
  </PhilipGizzieTheme>
);