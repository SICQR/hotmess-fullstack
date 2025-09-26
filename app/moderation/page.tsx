import Link from 'next/link';

export default function ModerationPage() {
  return (
    <div className="space-y-8">
      <section aria-label="Moderation hub">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Moderation & Safety</h1>
        <p className="text-lg mt-4">Keeping our community safe and respectful. Report issues, get help.</p>
      </section>

      <section aria-label="Quick actions" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">Report Urgent Issue</h2>
          <p className="mb-4">Harassment, illegal content, or immediate safety concerns</p>
          <button className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600">
            Report Now
          </button>
        </div>
        
        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">General Report</h2>
          <p className="mb-4">Spam, inappropriate content, or community guideline violations</p>
          <button className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-600">
            Submit Report
          </button>
        </div>
      </section>

      <section aria-label="Reporting guidelines" className="prose prose-invert max-w-none">
        <h2 className="text-3xl" style={{fontFamily:'var(--font-anton)'}}>What to Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="rounded-2xl border border-line p-4">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Urgent Issues</h3>
            <ul className="space-y-2 text-sm">
              <li>• Harassment or bullying</li>
              <li>• Illegal content</li>
              <li>• Non-consensual sharing</li>
              <li>• Threats or violence</li>
              <li>• Underage users</li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-line p-4">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">General Issues</h3>
            <ul className="space-y-2 text-sm">
              <li>• Spam or fake accounts</li>
              <li>• Inappropriate content</li>
              <li>• Community guideline violations</li>
              <li>• Technical issues</li>
              <li>• Copyright concerns</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Our Response</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
          <div className="rounded-2xl border border-line p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Review</h3>
            <p className="text-sm opacity-70">All reports reviewed within 24 hours</p>
          </div>
          <div className="rounded-2xl border border-line p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Action</h3>
            <p className="text-sm opacity-70">Swift action on violations</p>
          </div>
          <div className="rounded-2xl border border-line p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
            <p className="text-sm opacity-70">Updates on serious reports</p>
          </div>
        </div>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Community Standards</h2>
        <p>
          HOTMESS London is a men-only, 18+ community built on respect and consent. 
          We don't tolerate harassment, discrimination, or illegal activity.
        </p>
      </section>

      {/* Emergency resources */}
      <section aria-label="Emergency resources" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4 text-red-400" style={{fontFamily:'var(--font-anton)'}}>
          Emergency Resources
        </h2>
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <p className="mb-4">
            <strong>If you're in immediate danger, contact emergency services:</strong>
          </p>
          <ul className="space-y-2 text-sm">
            <li>• UK Emergency: 999</li>
            <li>• Samaritans: 116 123 (free, 24/7)</li>
            <li>• LGBT+ Helpline: 0300 330 0630</li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section aria-label="Related sections" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>Get Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/care" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Aftercare Hub</h3>
            <p className="text-sm opacity-70">Support resources</p>
          </Link>
          <Link href="/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Community</h3>
            <p className="text-sm opacity-70">Connect safely</p>
          </Link>
          <Link href="/legal/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Guidelines</h3>
            <p className="text-sm opacity-70">Community rules</p>
          </Link>
          <Link href="/legal" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Legal</h3>
            <p className="text-sm opacity-70">Policies & terms</p>
          </Link>
        </div>
      </section>
    </div>
  );
}