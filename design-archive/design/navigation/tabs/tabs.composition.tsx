import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Tabs } from './tabs.js';
import type { TabItem } from './tab-item-type.js';

const sampleTabs: TabItem[] = [
  {
    label: 'Directions',
    component: (
      <div>
        <h3 style={{ margin: 0, fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)' }}>Find Your Way</h3>
        <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)' }}>
          Navigate complex routes with our intuitive direction-finding tools. This view provides detailed, step-by-step guidance to your destination.
        </p>
        <img
          src="https://images.unsplash.com/photo-1571039045050-ab1a68aa8ec1?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxVSSUyMHRhYnMlMjBuYXZpZ2F0aW9ufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NDg4fDA&ixlib=rb-4.1.0"
          alt="shallow focus photo of gray signage"
          style={{ width: '100%', borderRadius: 'var(--borders-radius-medium)' }}
        />
      </div>
    ),
  },
  {
    label: 'Sailing',
    component: (
      <div>
        <h3 style={{ margin: 0, fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)' }}>Set Sail</h3>
        <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)' }}>
          Discover information and tools related to maritime navigation. Track vessels, check weather conditions, and plan your voyage across the open water.
        </p>
        <img
          src="https://images.unsplash.com/photo-1585531652595-f0a36ee5d021?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxVSSUyMHRhYnMlMjBuYXZpZ2F0aW9ufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NDg4fDA&ixlib=rb-4.1.0"
          alt="white sailboat on blue sea during daytime"
          style={{ width: '100%', borderRadius: 'var(--borders-radius-medium)' }}
        />
      </div>
    ),
  },
  {
    label: 'Enterprise',
    component: (
      <div>
        <h3 style={{ margin: 0, fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)' }}>Explore New Frontiers</h3>
        <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)' }}>
          "Live long and prosper!" - Our enterprise solutions are designed for large-scale operations, pushing the boundaries of what is possible.
        </p>
        <img
          src="https://images.unsplash.com/photo-1501532358732-8b50b34df1c4?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw5fHxVSSUyMHRhYnMlMjBuYXZpZ2F0aW9ufGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NDg4fDA&ixlib=rb-4.1.0"
          alt="round gray USS Enterprise aircraft scale model"
          style={{ width: '100%', borderRadius: 'var(--borders-radius-medium)' }}
        />
      </div>
    ),
  },
];

export const BasicTabs = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Tabs tabs={sampleTabs} />
      </div>
    </PhilipGizzieTheme>
  );
};

export const PreselectedTab = () => {
  return (
    <PhilipGizzieTheme>
       <div style={{ padding: 'var(--spacing-large)' }}>
        <Tabs tabs={sampleTabs} defaultActiveTab={1} />
      </div>
    </PhilipGizzieTheme>
  );
};

export const SimpleContentTabs = () => {
  const simpleTabs = [
    { label: 'Tab One', component: <p>This is the content for the first tab.</p> },
    { label: 'Tab Two', component: <p>This is the content for the second tab.</p> },
    { label: 'Tab Three', component: <p>This is the content for the third tab.</p> }
  ];

  return (
    <PhilipGizzieTheme>
       <div style={{ padding: 'var(--spacing-large)' }}>
        <Tabs tabs={simpleTabs} />
      </div>
    </PhilipGizzieTheme>
  );
};