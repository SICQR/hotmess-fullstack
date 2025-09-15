import Link from "next/link";
import * as React from "react";

type Props = {
  href: string; children: React.ReactNode; className?: string;
  external?: boolean; target?: "_blank" | "_self"; rel?: string; onClick?: React.MouseEventHandler;
};
export default function HMLink({ href, external, target, rel, children, className, onClick }: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) return <a href={href} target={target ?? "_blank"} rel={rel ?? "noopener"} className={className} onClick={onClick}>{children}</a>;
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
