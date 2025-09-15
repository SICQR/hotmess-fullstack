import React, { useState } from 'react';
import classNames from 'classnames';
import type { TabItem } from './tab-item-type.js';
import styles from './tabs.module.scss';

export type TabsProps = {
  /**
   * An array of tab objects, each with a label and a component to render.
   */
  tabs: TabItem[];

  /**
   * The index of the tab that should be active by default.
   */
  defaultActiveTab?: number;

  /**
   * Optional custom CSS class for the root element.
   */
  className?: string;

  /**
   * Optional custom inline styles for the root element.
   */
  style?: React.CSSProperties;
};

/**
 * A flexible and accessible tab component for navigating between different views.
 * It renders a list of tab buttons and displays the content of the currently active tab.
 */
export function Tabs({
  tabs,
  defaultActiveTab = 0,
  className,
  style,
}: TabsProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const ActiveComponent = tabs[activeTab]?.component;

  return (
    <div className={classNames(styles.tabsContainer, className)} style={style}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={classNames(styles.tabButton, {
              [styles.active]: activeTab === index,
            })}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className={styles.tabContent}
      >
        {ActiveComponent || null}
      </div>
    </div>
  );
}