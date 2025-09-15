import React from 'react';

import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Logo } from './logo.js';

export const BasicLogo = () => {
  return (
    <PhilipGizzieTheme>
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    </PhilipGizzieTheme>
  <Logo name="Acme" />
export const LogoWithSloganAndLink = () => {
  return (
    <PhilipGizzieTheme>
      <MemoryRouter>
        <Logo name="Innovate Inc." slogan="Building the Future" href="/about" />
      </MemoryRouter>
    </PhilipGizzieTheme>
  <Logo name="Test Corp" slogan="Innovation" />
export const CustomImageAndSizeLogo = () => {
  return (
    <PhilipGizzieTheme>
      <Logo
        src="https://images.unsplash.com/photo-1554312520-818038ac6156?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw2fHxhYnN0cmFjdCUyMGNvcnBvcmF0ZSUyMGRlczF8bnwwfDJ8fGJsdWV8MTc1Nzg0Nzc1OHww&ixlib=rb-4.1.0"
        name="Keystone"
        slogan="Modern Architecture"
        href="/"
        logoSize={40}
      />
    </PhilipGizzieTheme>
  );
};

export const MinimalLogo = () => {
  return (
    <PhilipGizzieTheme>
      <MemoryRouter>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <Logo minimal href="/" logoSize={48} />
          <Logo
            minimal
            href="/"
            logoSize={48}
            src="https://images.unsplash.com/photo-1508834199084-a6f30e906717?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGNvcnBvcmF0ZSUyMGRlc2lnbnxlbnwxfDJ8fGJsdWV8MTc1Nzg0Nzc1OHww&ixlib=rb-4.1.0"
          />
        </div>
      </MemoryRouter>
    </PhilipGizzieTheme>
  );
};