import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function TextInput({
  className = "",
  ...rest
}: Props) {
  return (
    <input
      {...rest}
      className={`bg-[var(--hm-bg)] text-[var(--hm-fg)] border border-[var(--hm-line)] rounded-xl px-3 py-2 ${className}`}
    />
  );
}
