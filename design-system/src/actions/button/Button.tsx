"use client";
import * as React from "react";
import NextLink from "next/link";

type Appearance = "primary" | "secondary" | "tertiary";
type Common = { children:React.ReactNode; className?:string; appearance?:Appearance; disabled?:boolean; title?:string; };
type ButtonProps = Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = Common & { href: string; external?: boolean; onClick?: React.MouseEventHandler };

export default function Button(props: ButtonProps | AnchorProps){
  const { appearance="secondary", className="", children, title } = props as Common;
  const base = "inline-flex items-center justify-center gap-2 rounded-full border text-sm px-4 py-2 transition";
  const map: Record<Appearance,string> = {
    primary: "bg-[var(--hm-accent)] text-black border-[var(--hm-accent)] font-semibold",
    secondary: "border-[var(--hm-line)] text-[var(--hm-fg)] hover:bg-white/5",
    tertiary: "border-transparent underline text-[var(--hm-fg)]"
  };
  const classes = `${base} ${map[appearance]} ${className}`.trim();

  if ("href" in props && props.href) {
    const isExternal = props.external ?? /^https?:\/\//.test(props.href);
    return isExternal
      ? <a href={props.href} className={classes} title={title}>{children}</a>
      : <NextLink href={props.href} className={classes} title={title}>{children}</NextLink>;
  }

  const { disabled, onClick, type="button" } = props as ButtonProps;
  return <button type={type} disabled={disabled} onClick={onClick} className={classes} title={title} aria-disabled={disabled}>{children}</button>;
}
