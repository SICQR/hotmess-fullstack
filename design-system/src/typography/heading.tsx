import * as React from "react";

/**
 * Heading — semantic + visually flexible
 * - level:     semantic level (1–6) -> renders <h1>..<h6>
 * - visualLevel: optional visual size (1–6); defaults to level
 * - className: extra classes
 */
type Level = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  level?: Level;
  visualLevel?: Level;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  title?: string;
};

const VARS: Record<Level, { fs: string; lh: string }> = {
  1: { fs: "var(--h1)", lh: "var(--h1-lh)" },
  2: { fs: "var(--h2)", lh: "var(--h2-lh)" },
  3: { fs: "var(--h3)", lh: "var(--h3-lh)" },
  4: { fs: "var(--h4)", lh: "var(--h4-lh)" },
  5: { fs: "var(--h5)", lh: "var(--h5-lh)" },
  6: { fs: "var(--body)", lh: "var(--body-lh)" },
};

export default function Heading({
  level = 1,
  visualLevel,
  className = "",
  style,
  children,
  id,
  title,
}: Props) {
  const Tag = (`h${level}` as keyof React.JSX.IntrinsicElements);
  const v = VARS[visualLevel ?? level];

  // Anton + uppercase are defined in tokens.scss for headings inside .hm-scope,
  // but we still add uppercase here to survive outside that scope if needed.
  const cls = `uppercase tracking-tight ${className}`.trim();

  return (
    <Tag
      id={id}
      title={title}
      className={cls}
      style={{ fontSize: v.fs, lineHeight: v.lh, letterSpacing: "-0.5px", ...style }}
    >
      {children}
    </Tag>
  );
}
