import AgeGateModal from '@/components/AgeGateModal';
import AftercareDisclaimer from '@/components/AftercareDisclaimer';
import Link from 'next/link';

export default function ShopHungPage() {
  return (
    <div className="space-y-8">
      <AgeGateModal />
      
      {/* Aftercare disclaimer - auto-inserted per requirements */}
      <AftercareDisclaimer variant="prominent" />

      <section aria-label="Shop HUNG Collection">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>
          HUNG — Oversized, Gym-to-Rave Flex
        </h1>
        <p className="text-lg mt-4">Bold pieces that move with you. Men-only, 18+.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Product placeholders - will be populated by API */}
          <div className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <div className="aspect-square bg-gray-800 rounded-xl mb-4" aria-label="Product image placeholder"></div>
            <h3 className="text-xl font-semibold">HUNG Tank</h3>
            <p className="text-sm opacity-70">Oversized muscle tank</p>
            <p className="text-lg font-bold mt-2">£35</p>
            <button className="w-full mt-4 px-4 py-2 rounded-xl bg-accent text-black font-semibold">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <div className="aspect-square bg-gray-800 rounded-xl mb-4" aria-label="Product image placeholder"></div>
            <h3 className="text-xl font-semibold">HUNG Shorts</h3>
            <p className="text-sm opacity-70">Loose-fit athletic shorts</p>
            <p className="text-lg font-bold mt-2">£45</p>
            <button className="w-full mt-4 px-4 py-2 rounded-xl bg-accent text-black font-semibold">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <div className="aspect-square bg-gray-800 rounded-xl mb-4" aria-label="Product image placeholder"></div>
            <h3 className="text-xl font-semibold">HUNG Hoodie</h3>
            <p className="text-sm opacity-70">Oversized pullover hoodie</p>
            <p className="text-lg font-bold mt-2">£65</p>
            <button className="w-full mt-4 px-4 py-2 rounded-xl bg-accent text-black font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Cross-links to other sections */}
      <section aria-label="Related sections" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>More HOTMESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/care" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Aftercare Hub</h3>
            <p className="text-sm opacity-70">Support & resources</p>
          </Link>
          <Link href="/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Community</h3>
            <p className="text-sm opacity-70">Connect with others</p>
          </Link>
          <Link href="/radio" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Radio</h3>
            <p className="text-sm opacity-70">Listen live</p>
          </Link>
        </div>
      </section>
    </div>
  );
}