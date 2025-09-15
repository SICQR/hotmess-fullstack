import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './tabs.js';
import type { TabItem } from './tab-item-type.js';
import styles from './tabs.module.scss';

describe('Tabs Component', () => {
  const tabs: TabItem[] = [
    { label: 'Tab 1', component: <div>Content 1</div> },
    { label: 'Tab 2', component: <div>Content 2</div> },
    { label: 'Tab 3', component: <div>Content 3</div> },
  ];

  it('should render the tabs', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();

    const tabList = container.querySelector(`.${styles.tabList}`);
    expect(tabList).toBeInTheDocument();
  });

  it('should display the content of the active tab', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(container.querySelector('#tabpanel-0')).toBeInTheDocument();
  });

  it('should switch tabs when a tab is clicked', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();

    const tab2Button = container.querySelector('#tab-1');
    expect(tab2Button).toHaveAttribute('aria-selected', 'true');
  });
});