import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="hm-container space-y-12">
      <section aria-label="Hero" className="space-y-4">
        <h1 className="text-5xl sm:text-6xl leading-tight" style={{fontFamily:'var(--font-anton)'}}>Always too much, yet never enough.</h1>
        <p className="text-lg">Buy it. Play it. Scan it. Join the mess.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/shop" className="px-4 py-2 rounded-xl bg-accent text-black font-semibold">Shop Now</Link>
          <Link href="/radio" className="px-4 py-2 rounded-xl border border-line">Listen Live</Link>
          <Link href="/community" className="px-4 py-2 rounded-xl border border-line">Join Rooms</Link>
        </div>
        <p className="text-xs opacity-80">Men-only, 18+. HNH MESS funds real aftercare.</p>
      </section>

      <section aria-label="Live strip" className="rounded-2xl border border-line p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-sm">Now Playing: <strong>{`{Show}`}</strong> — {`{Track}`}</div>
          <Link href="/radio" className="px-3 py-1 rounded-xl bg-accent text-black">Play</Link>
          <Link href="/radio/schedule" className="underline text-sm">Schedule</Link>
          <Link href="/community#rooms" className="underline text-sm">Join Room</Link>
          <span className="ml-auto text-xs">Sponsored by HNH MESS — the only lube with real aftercare.</span>
        </div>
      </section>

      <section aria-label="Shop rails" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'RAW', href: '/shop/raw', desc: 'heavy, leather-lux grit' },
          { title: 'HUNG', href: '/shop/hung', desc: 'oversized, gym-to-rave flex' },
          { title: 'HIGH', href: '/shop/high', desc: 'varsity locker-room fantasy' },
          { title: 'SUPER', href: '/shop/super', desc: 'limited drops' },
        ].map((c)=> (
          <Link key={c.title} href={c.href} className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>{c.title}</h3>
            <p className="text-sm opacity-80">{c.desc}</p>
          </Link>
        ))}
      </section>

      <section aria-label="HNH MESS" className="rounded-2xl border border-line p-6 space-y-2">
        <h2 className="text-3xl" style={{fontFamily:'var(--font-anton)'}}>HARD. HAPPY. HEALTHY.</h2>
        <p>Aftercare = information & services — not medical advice.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/hnh" className="px-4 py-2 rounded-xl bg-accent text-black font-semibold">Shop HNH</Link>
          <Link href="/care" className="px-4 py-2 rounded-xl border border-line">Aftercare Hub</Link>
          <Link href="/radio/hand-n-hand" className="px-4 py-2 rounded-xl border border-line">Hand N Hand (Sun)</Link>
        </div>
      </section>

      <section aria-label="Community & Affiliate" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>Join Rooms</h3>
          <p className="text-sm opacity-80">Scan-to-earn via QR. UTM tracked 30 days.</p>
        </Link>
        <Link href="/qr" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>Get Your QR</h3>
        </Link>
        <Link href="/legend" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>Legend Board</h3>
        </Link>
      </section>

      <section aria-label="Records & Lookbook" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/records" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>RAW CONVICT RECORDS</h3>
          <p className="text-sm opacity-80">Queer hard house. For the ones still here.</p>
        </Link>
        <Link href="/lookbook" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>Lookbook</h3>
          <p className="text-sm opacity-80">Street to sweat to sin.</p>
        </Link>
      </section>

      <section aria-label="Wetter Watch" className="rounded-2xl border border-line p-6">
        <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>Forecast or Foreplay?</h3>
        <div className="flex gap-3 mt-2">
          <Link href="/care/weather" className="underline">Local Forecast</Link>
          <Link href="/care#tips" className="underline">Care Tips</Link>
        </div>
      </section>
    </main>
  );
}
