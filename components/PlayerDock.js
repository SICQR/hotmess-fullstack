'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PlayerDock(){
  const [open, setOpen] = useState(true);
  return (
    <div className={`fixed ${open? 'bottom-0':'-bottom-64'} left-0 right-0 transition-all duration-300 z-40`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <div className="mb-3 rounded-2xl border border-line bg-black/90 backdrop-blur">
          <div className="flex items-center gap-3 p-3">
            <button className="px-3 py-2 rounded-xl bg-accent text-black font-bold" aria-label="Play/Pause">▶︎</button>
            <div className="text-sm">Now Playing: <span className="font-semibold">{'{Show}'}</span> — {'{Track}'}</div>
            <span className="ml-auto text-xs px-2 py-1 rounded-full border border-line">LIVE</span>
            <Link href="/radio/schedule" className="text-sm underline">Schedule</Link>
            <Link href="/community#rooms" className="text-sm underline">Join Room</Link>
            <button onClick={()=>setOpen(false)} className="ml-2 text-sm opacity-70 hover:opacity-100" aria-label="Collapse player">↓</button>
          </div>
        </div>
      </div>
    </div>
  );
}
