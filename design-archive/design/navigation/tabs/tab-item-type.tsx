import type { ReactNode } from 'react';

/**
 * Defines the structure for a single tab item.
 */
export type TabItem = {
  /**
   * The text to display on the tab button.
   */
  label: string;

  /**
   * The content to render when this tab is active.
   */
  component: ReactNode;
};