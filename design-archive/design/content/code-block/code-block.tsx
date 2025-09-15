import React, { useState } from 'react';
import classNames from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@philip-gizzie/design.actions.button';
import { CopyIcon } from './copy-icon.js';
import { CheckIcon } from './check-icon.js';
import styles from './code-block.module.scss';

export type CodeBlockProps = {
  /**
   * The code content to display.
   */
  children: string;

  /**
   * The programming language for syntax highlighting.
   */
  language?: string;

  /**
   * An optional title for the code block.
   */
  title?: string;

  /**
   * Additional class names to apply to the component.
   */
  className?: string;

  /**
   * Custom inline styles.
   */
  style?: React.CSSProperties;
};

/**
 * A component to display code with syntax highlighting and a copy-to-clipboard feature.
 */
export function CodeBlock({
  children,
  language = 'typescript',
  title,
  className,
  style,
}: CodeBlockProps): React.JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;
    navigator.clipboard.writeText(children).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
    },
  };

  return (
    <div className={classNames(styles.codeBlock, className)} style={style}>
      <header className={styles.header}>
        {title ? (
          <span className={styles.title}>{title}</span>
        ) : (
          <div /> // Empty div for spacing
        )}
        <Button
          appearance="tertiary"
          onClick={handleCopy}
          className={styles.copyButton}
          disabled={isCopied}
        >
          {isCopied ? (
            <CheckIcon />
          ) : (
            <CopyIcon />
          )}
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </Button>
      </header>
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        showLineNumbers={false}
        className={styles.highlighter}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}