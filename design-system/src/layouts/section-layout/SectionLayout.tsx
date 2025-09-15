import * as React from "react";
export default function SectionLayout({
  title, subtitle, caption, className="", children
}:{ title?:string; subtitle?:string; caption?:string; className?:string; children:React.ReactNode }){
  return (
    <section className={`py-8 border-t border-[var(--hm-line)] ${className}`}>
      {(title || subtitle || caption) && (
        <header className="mb-4">
          {title ? <h2 className="text-[40px] leading-[44px] uppercase">{title}</h2> : null}
          {subtitle ? <p className="text-lg">{subtitle}</p> : null}
          {caption ? <p className="text-xs text-[var(--hm-muted)]">{caption}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}
