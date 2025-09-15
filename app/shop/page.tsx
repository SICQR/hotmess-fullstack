import Link from 'next/link';

export default function ShopPage(){
  const cols = [
    { title:'RAW', href:'/shop/raw', blurb:'heavy, leather-lux grit' },
    { title:'HUNG', href:'/shop/hung', blurb:'oversized, gym-to-rave flex' },
    { title:'HIGH', href:'/shop/high', blurb:'varsity locker-room fantasy' },
    { title:'SUPER', href:'/shop/super', blurb:'limited drops' },
  ];
  return (
    <div className="space-y-8">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Wear Your Mess</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cols.map(c=> (
          <Link key={c.title} href={c.href} className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3 className="text-2xl" style={{fontFamily:'var(--font-anton)'}}>{c.title}</h3>
            <p className="text-sm opacity-80">{c.blurb}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/bundles" className="px-4 py-2 rounded-xl border border-line">Bundles</Link>
        <Link href="/size" className="px-4 py-2 rounded-xl border border-line">Size Guide</Link>
      </div>
    </div>
  );
}
