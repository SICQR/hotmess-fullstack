import React, { useState } from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import type { SelectListItem } from './select-list-item-type.js';
import { SelectList } from './select-list.js';

const sampleOptions: SelectListItem[] = [
  { value: 'new-york', label: 'New York' },
  { value: 'london', label: 'London' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'paris', label: 'Paris' },
  { value: 'sydney', label: 'Sydney' },
];

const longSampleOptions: SelectListItem[] = [
  { value: 'item-1', label: 'To the sky' },
  { value: 'item-2', label: 'a white and black object on a blue background' },
  { value: 'item-3', label: 'black and white building.' },
  { value: 'item-4', label: 'a yellow box with a square opening' },
  { value: 'item-5', label: 'a blurry photo of a light blue background' },
  { value: 'item-6', label: 'Round Windows' },
  { value: 'item-7', label: 'blue and white checkered textile' },
  { value: 'item-8', label: 'Ups' },
  { value: 'item-9', label: 'White h2o molecules or atoms' },
  { value: 'item-10', label: 'a blue and white abstract background' },
];

export const BasicSelectList = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  return (
    <PhilipGizzieTheme>
      <div
        style={{
          padding: '40px',
          width: '320px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--colors-surface-background)',
        }}
      >
        <SelectList
          options={sampleOptions}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
          placeholder="Select a city..."
        />
      </div>
    </PhilipGizzieTheme>
  );
};

export const SelectListWithPreselectedValue = () => {
  const [selectedValue, setSelectedValue] = useState<string>('tokyo');

  return (
    <PhilipGizzieTheme>
      <div
        style={{
          padding: '40px',
          width: '320px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--colors-surface-background)',
        }}
      >
        <SelectList
          options={sampleOptions}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
        />
      </div>
    </PhilipGizzieTheme>
  );
};

export const SelectListWithManyOptions = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    'item-9'
  );

  return (
    <PhilipGizzieTheme>
      <div
        style={{
          padding: '40px',
          width: '320px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--colors-surface-background)',
        }}
      >
        <SelectList
          options={longSampleOptions}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
          placeholder="Select an item..."
        />
      </div>
    </PhilipGizzieTheme>
  );
};