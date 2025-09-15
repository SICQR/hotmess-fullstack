import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { CodeBlock } from './code-block.js';

const tsxCodeExample = `import React, { useState } from 'react';

/**
 * A custom hook to manage a counter.
 * @param initialState - The initial value of the counter.
 * @returns An object with the current count, and functions to increment, decrement, and reset.
 */
export function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialState);

  return { count, increment, decrement, reset };
}`;

const pythonCodeExample = `class Greeter:
    def __init__(self, name):
        self.name = name

    def greet(self, loud=False):
        if loud:
            print(f'HELLO, {self.name.upper()}!')
        else:
            print(f'Hello, {self.name}')

g = Greeter('Developer')
g.greet()
g.greet(loud=True)`;

const jsonCodeExample = `{
  "name": "full-stack-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@philip-gizzie/design.philip-gizzie-theme": "latest",
    "@philip-gizzie/design.actions.button": "latest",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-syntax-highlighter": "^15.5.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}`;

export const BasicTypeScriptCodeBlock = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', width: 600 }}>
        <CodeBlock language="typescript">{tsxCodeExample}</CodeBlock>
      </div>
    </PhilipGizzieTheme>
  );
};

export const PythonCodeBlockWithTitle = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', width: 600 }}>
        <CodeBlock language="python" title="greeter.py">
          {pythonCodeExample}
        </CodeBlock>
      </div>
    </PhilipGizzieTheme>
  );
};

export const JsonConfiguration = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ padding: 'var(--spacing-large)', width: 600 }}>
        <CodeBlock language="json" title="package.json">
          {jsonCodeExample}
        </CodeBlock>
      </div>
    </PhilipGizzieTheme>
  );
};