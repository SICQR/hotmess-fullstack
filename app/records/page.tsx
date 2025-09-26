import Link from 'next/link';

export default function RecordsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Records</h1>
      <p>Discover our curated collection of records and releases.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/radio" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3>Listen Now</h3>
          <p>Stream our radio shows</p>
        </Link>
        <Link href="/shop" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3>Shop Vinyl</h3>
          <p>Physical releases</p>
        </Link>
        <Link href="/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
          <h3>Community</h3>
          <p>Connect with other listeners</p>
        </Link>
      </div>
    </div>
  );
}
