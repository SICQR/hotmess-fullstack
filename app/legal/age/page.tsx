import Link from 'next/link';

export default function AgeVerificationPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <section aria-label="Age verification policy">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Age Verification Policy</h1>
        <p className="text-lg mt-4">Men-only, 18+ community. Clear boundaries, explicit consent.</p>
      </section>

      <section aria-label="Policy content" className="prose prose-invert max-w-none">
        <h2 className="text-3xl" style={{fontFamily:'var(--font-anton)'}}>Age Requirements</h2>
        <p>
          HOTMESS London is an adult-oriented platform exclusively for men aged 18 and over. 
          By accessing our services, you confirm that you meet these requirements.
        </p>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Verification Process</h2>
        <ul>
          <li>Age gate modal on high-risk content access</li>
          <li>Explicit consent required for adult content</li>
          <li>Local storage verification (non-tracking)</li>
          <li>GDPR-compliant, purpose-limited data use</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Consent Requirements</h2>
        <p>
          Access to Shop HUNG, explicit content, and community features requires:
        </p>
        <ul>
          <li>Confirmation of 18+ age status</li>
          <li>Understanding of adult content nature</li>
          <li>Acceptance of men-only community guidelines</li>
          <li>Opt-in consent for data processing</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Enforcement</h2>
        <p>
          We reserve the right to request additional verification for suspicious activity. 
          Violations may result in account suspension or termination.
        </p>
      </section>

      {/* Cross-links */}
      <section aria-label="Related legal pages" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>Related Policies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/legal/terms" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Terms of Service</h3>
            <p className="text-sm opacity-70">Full service terms</p>
          </Link>
          <Link href="/legal/privacy" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Privacy Policy</h3>
            <p className="text-sm opacity-70">Data protection</p>
          </Link>
          <Link href="/legal/community" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Community Guidelines</h3>
            <p className="text-sm opacity-70">Behavior standards</p>
          </Link>
        </div>
      </section>
    </div>
  );
}