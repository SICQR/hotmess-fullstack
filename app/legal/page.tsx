import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="space-y-8">
      <section aria-label="Legal hub">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Legal & Compliance</h1>
        <p className="text-lg mt-4">Bold policies, clear boundaries. Men-only, 18+.</p>
      </section>

      <section aria-label="Legal documents" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/legal/terms" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Terms of Service</h2>
          <p className="text-sm opacity-70">Our service terms and conditions</p>
        </Link>
        
        <Link href="/legal/privacy" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-sm opacity-70">GDPR-compliant data handling</p>
        </Link>
        
        <Link href="/legal/age" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Age Verification</h2>
          <p className="text-sm opacity-70">18+ verification policy</p>
        </Link>
        
        <Link href="/legal/cookies" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Cookie Policy</h2>
          <p className="text-sm opacity-70">How we use cookies</p>
        </Link>
        
        <Link href="/legal/community" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Community Guidelines</h2>
          <p className="text-sm opacity-70">Expected behavior standards</p>
        </Link>
        
        <Link href="/legal/disclaimer" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
          <p className="text-sm opacity-70">Limitations and responsibilities</p>
        </Link>
      </section>

      {/* Cross-links to other sections */}
      <section aria-label="Related sections" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>Navigate HOTMESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Home</h3>
            <p className="text-sm opacity-70">Back to main</p>
          </Link>
          <Link href="/shop" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Shop</h3>
            <p className="text-sm opacity-70">Browse collections</p>
          </Link>
          <Link href="/moderation" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Moderation</h3>
            <p className="text-sm opacity-70">Report issues</p>
          </Link>
          <Link href="/care" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Aftercare</h3>
            <p className="text-sm opacity-70">Support hub</p>
          </Link>
        </div>
      </section>
    </div>
  );
}