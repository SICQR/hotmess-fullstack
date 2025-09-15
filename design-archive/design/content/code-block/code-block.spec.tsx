import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CodeBlock } from './code-block.js';
import styles from './code-block.module.scss';

const codeContent = 'console.log("Hello, world!");';

describe('CodeBlock Component', () => {
  it('should render the code content', () => {
    const { container } = render(<CodeBlock>{codeContent}</CodeBlock>);
    // The code content is rendered by SyntaxHighlighter, which breaks the text into multiple spans.
    // We target the <code> element within the highlighter and check its textContent.
    const codeElement = container.querySelector(`.${styles.highlighter} pre code`);
    expect(codeElement).toBeInTheDocument();
    expect(codeElement?.textContent).toContain(codeContent);
  });

  it('should render the copy button', () => {
    render(<CodeBlock>{codeContent}</CodeBlock>);
    const copyButton = screen.getByText('Copy');
    expect(copyButton).toBeInTheDocument();
  });

  it('should copy the code to clipboard when copy button is clicked', async () => {
    const { container } = render(<CodeBlock>{codeContent}</CodeBlock>);
    const copyButton = container.querySelector(`.${styles.copyButton}`);
    
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.resolve()),
      },
      writable: true,
    });
    
    if (copyButton) {
      fireEvent.click(copyButton);
    }
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(codeContent);
  });
});