import Link from 'next/link';

export default function RadioPage(){
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>HOTMESS RADIO — too much, never enough.</h1>
        <p>Broadcasting 24/7. Player persists while you browse.</p>
        <div className="flex gap-3">
          <Link href="/radio/schedule" className="px-4 py-2 rounded-xl border border-line">Schedule</Link>
          <Link href="/radio/shows" className="px-4 py-2 rounded-xl border border-line">Shows & DJs</Link>
          <Link href="/community#rooms" className="px-4 py-2 rounded-xl bg-accent text-black">Join Room</Link>
        </div>
        <p className="text-xs opacity-80">Sponsored by HNH MESS — the only lube with real aftercare.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Wake the Mess','Dial-A-Daddy','Hand N Hand (Sun)'].map((s)=> (
          <Link key={s} href={s.includes('Hand')? '/radio/hand-n-hand':'/radio/shows'} className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>{s}</h3>
            <p className="text-sm opacity-80">Listen clip • Join room</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
