import * as React from "react";
export default function SelectList({
  options, value, onChange, className=''
}:{ options:{label:string; value:string}[]; value?:string; onChange?:React.ChangeEventHandler<HTMLSelectElement>; className?:string }){
  return (
    <select
      className={`bg-[var(--hm-bg)] text-[var(--hm-fg)] border border-[var(--hm-line)] rounded-xl px-3 py-2 ${className}`}
      value={value} onChange={onChange}
    >
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}
