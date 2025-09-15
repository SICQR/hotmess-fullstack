import React from 'react';

import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { CtaButton } from './cta-button.js';

const compositionWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-xl)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-x4)',
  backgroundColor: 'var(--colors-surface-background)',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large)',
};

const buttonRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--spacing-large)',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--typography-font-family)',
  fontSize: 'var(--typography-sizes-heading-h3)',
  color: 'var(--colors-text-primary)',
  margin: 0,
};

export const CtaButtonAppearances = () => {
  return (
    <PhilipGizzieTheme>
      <div style={compositionWrapperStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Call to Action Buttons</h3>
          <div style={buttonRowStyle}>
            <CtaButton
              appearance="primary"
              onClick={() => alert('Primary CTA clicked!')}
            >
              Get Started Now
            </CtaButton>
            <CtaButton
              appearance="secondary"
              onClick={() => alert('Secondary CTA clicked!')}
            >
              Learn More
            </CtaButton>
            <CtaButton
              appearance="tertiary"
              onClick={() => alert('Tertiary CTA clicked!')}
            >
              Request a Demo
            </CtaButton>
          </div>
        </div>
      </div>
    </PhilipGizzieTheme>
  <CtaButton>Click Me</CtaButton>
export const DisabledCtaButtons = () => {
  return (
    <PhilipGizzieTheme>
      <div style={compositionWrapperStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Disabled CTA Buttons</h3>
          <div style={buttonRowStyle}>
            <CtaButton appearance="primary" disabled>
              Primary Disabled
            </CtaButton>
            <CtaButton appearance="secondary" disabled>
              Secondary Disabled
            </CtaButton>
            <CtaButton appearance="tertiary" disabled>
              Tertiary Disabled
            </CtaButton>
          </div>
        </div>
      </div>
    </PhilipGizzieTheme>
  <CtaButton href="/test">Test Link</CtaButton>
export const CtaButtonsAsLinks = () => {
  return (
    <PhilipGizzieTheme>
      <MemoryRouter>
        <div style={compositionWrapperStyle}>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>CTA Buttons as Links</h3>
            <div style={buttonRowStyle}>
              <CtaButton href="/pricing" appearance="primary">
                View Pricing
              </CtaButton>
              <CtaButton
                href="https://bit.dev"
                external
                appearance="secondary"
              >
                Visit Our Site
              </CtaButton>
              <CtaButton href="/contact" disabled appearance="tertiary">
                Contact (Disabled)
              </CtaButton>
            </div>
          </div>
        </div>
      </MemoryRouter>
    </PhilipGizzieTheme>
  );
};