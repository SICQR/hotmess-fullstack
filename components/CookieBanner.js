'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
  const [show,setShow]=useState(false);
  useEffect(()=>{ if(typeof window!== 'undefined' && !localStorage.getItem('cookies')) setShow(true); },[]);
  if(!show) return null;
  return (
    <div className="fixed bottom-20 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl border border-line bg-black/90 backdrop-blur p-4 flex items-center gap-3">
          <p className="text-sm">Cookies for analytics and improvements. Choose your level.</p>
          <button className="ml-auto px-3 py-2 rounded-xl border border-line" onClick={()=>{localStorage.setItem('cookies','custom'); setShow(false);}}>Customize</button>
          <button className="px-3 py-2 rounded-xl bg-accent text-black font-semibold" onClick={()=>{localStorage.setItem('cookies','accept'); setShow(false);}}>Accept</button>
        </div>
      </div>
    </div>
  );
}
