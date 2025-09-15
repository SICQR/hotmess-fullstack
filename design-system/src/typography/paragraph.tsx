import * as React from "react";

export default function Paragraph({ children, className = "", style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}
