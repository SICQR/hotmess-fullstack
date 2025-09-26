import Link from 'next/link';
import AftercareDisclaimer from '@/components/AftercareDisclaimer';

export default function CarePage(){
  return (
    <div className="space-y-8">
      <section aria-label="Aftercare hub introduction">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>
          Aftercare = Information & Services
        </h1>
        <p className="text-lg mt-4">
          Not medical advice. Real resources for real men. If urgent, use emergency services first.
        </p>
      </section>

      <AftercareDisclaimer variant="prominent" />

      {/* Emergency resources */}
      <section aria-label="Emergency resources" className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
        <h2 className="text-2xl font-semibold text-red-400 mb-4" style={{fontFamily:'var(--font-anton)'}}>
          Emergency Resources
        </h2>
        <p className="mb-4"><strong>If you're in immediate danger or crisis:</strong></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">UK Emergency Services</h3>
            <ul className="space-y-1">
              <li>• Emergency: 999</li>
              <li>• NHS 111 (non-emergency)</li>
              <li>• Police non-emergency: 101</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Crisis Support</h3>
            <ul className="space-y-1">
              <li>• Samaritans: 116 123 (free, 24/7)</li>
              <li>• LGBT+ Helpline: 0300 330 0630</li>
              <li>• Mind Infoline: 0300 123 3393</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main resources */}
      <section aria-label="Support resources" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/radio/hand-n-hand" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h3 className="text-xl font-semibold mb-2">Hand N Hand (Sundays)</h3>
          <p className="text-sm opacity-70 mb-4">
            Weekly show focused on aftercare, mental health, and community support
          </p>
          <span className="text-accent">Listen Live →</span>
        </Link>
        
        <Link href="/community#rooms" className="rounded-2xl border border-line p-6 hover:bg-white/5">
          <h3 className="text-xl font-semibold mb-2">Community Rooms</h3>
          <p className="text-sm opacity-70 mb-4">
            Safe spaces to connect with others and share experiences
          </p>
          <span className="text-accent">Join Rooms →</span>
        </Link>
        
        <div className="rounded-2xl border border-line p-6">
          <h3 className="text-xl font-semibold mb-2">Local Resources</h3>
          <p className="text-sm opacity-70 mb-4">
            Find support services in your area
          </p>
          <ul className="text-sm space-y-2">
            <li>• NHS Mental Health Services</li>
            <li>• Local LGBT+ centers</li>
            <li>• Community support groups</li>
          </ul>
        </div>
      </section>

      {/* Information resources */}
      <section aria-label="Information resources">
        <h2 className="text-3xl mb-6" style={{fontFamily:'var(--font-anton)'}}>
          Information & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-line p-6">
            <h3 className="text-xl font-semibold mb-4">Sexual Health</h3>
            <ul className="space-y-2 text-sm">
              <li>• STI testing locations</li>
              <li>• PrEP information</li>
              <li>• Safe sex practices</li>
              <li>• Regular health checkups</li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-line p-6">
            <h3 className="text-xl font-semibold mb-4">Mental Wellbeing</h3>
            <ul className="space-y-2 text-sm">
              <li>• Stress management</li>
              <li>• Communication skills</li>
              <li>• Boundary setting</li>
              <li>• Self-care practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section aria-label="Related sections" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>More HOTMESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Home</h3>
            <p className="text-sm opacity-70">Back to main</p>
          </Link>
          <Link href="/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Community</h3>
            <p className="text-sm opacity-70">Connect safely</p>
          </Link>
          <Link href="/moderation" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Report Issues</h3>
            <p className="text-sm opacity-70">Get help</p>
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
