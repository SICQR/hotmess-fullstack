import React, { useState } from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { TextInput } from './text-input.js';

export const BasicTextInput = () => {
  const [value, setValue] = useState('');

  return (
    <PhilipGizzieTheme>
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <TextInput
          id="basic-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your name..."
        />
      </div>
    </PhilipGizzieTheme>
  );
};

export const PasswordInput = () => {
  const [password, setPassword] = useState('p@$$w0rd');

  return (
    <PhilipGizzieTheme>
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <TextInput
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
    </PhilipGizzieTheme>
  );
};

export const UncontrolledTextInput = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <TextInput
          id="uncontrolled-input"
          placeholder="This is an uncontrolled input with a placeholder"
          name="uncontrolled-field"
        />
      </div>
    </PhilipGizzieTheme>
  );
};