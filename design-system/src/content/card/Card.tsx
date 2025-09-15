import * as React from "react";
import styles from "./card.module.scss";

export default function Card({
  children, title, header, footer, image, imageAlt, interactive=false, className=''
}:{ children?:React.ReactNode; title?:string; header?:React.ReactNode; footer?:React.ReactNode; image?:string; imageAlt?:string; interactive?:boolean; className?:string }){
  const cls = [styles['hm-card'], interactive? styles['hm-card--interactive']:'', className].join(' ');
  return (
    <article className={cls}>
      {image ? <img className={styles['hm-card__img']} src={image} alt={imageAlt||title||'card image'} /> : null}
      {header || title ? <header className={styles['hm-card__header']}>{header || <h3 className="text-[28px] leading-[32px] uppercase">{title}</h3>}</header> : null}
      <div className={styles['hm-card__body']}>{children}</div>
      {footer ? <footer className={styles['hm-card__footer']}>{footer}</footer> : null}
    </article>
  );
}
