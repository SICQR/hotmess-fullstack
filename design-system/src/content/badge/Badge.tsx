import * as React from "react";
import styles from "./badge.module.scss";

type Size = "sm"|"md"|"lg"; type Variant="neutral"|"accent"|"muted";

export default function Badge({
  label, className="", variant="neutral", size="md", icon, color,
}:{ label:string; className?:string; variant?:Variant; size?:Size; icon?:React.ReactNode; color?:string; }){
  const cls = [styles["hm-badge"], styles[`hm-badge--${size}`], styles[`hm-badge--${variant}`], className].join(" ");
  const style = color ? ({ background: color, borderColor: color } as React.CSSProperties): undefined;
  return <span className={cls} style={style} role="status" aria-label={label}>{icon ? <span aria-hidden>{icon}</span>:null}{label}</span>;
}
