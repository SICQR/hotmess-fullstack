
'use client';
import { useEffect, useState } from 'react';

export default function AgeGateModal(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{ if(typeof window!== 'undefined' && !localStorage.getItem('ageGatePassed')) setOpen(true); },[]);
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-line bg-black p-6">
        <h2 className="text-2xl font-bold" style={{fontFamily:'var(--font-anton)'}}>18+ Entry</h2>
        <p className="mt-3 text-sm">Men-only, 18+. Do you confirm you are over 18 and wish to enter?</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-accent text-black font-semibold" onClick={()=>{localStorage.setItem('ageGatePassed','true'); setOpen(false);}}>Yes, enter</button>
          <a href="/" className="px-4 py-2 rounded-xl border border-line">No</a>
          <a href="/legal/age" className="ml-auto underline text-sm">Age Verification policy</a>
        </div>
      </div>
    </div>
  );
}
