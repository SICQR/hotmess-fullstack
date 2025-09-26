import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <section aria-label="Privacy policy">
        <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Privacy Policy</h1>
        <p className="text-lg mt-4">GDPR-compliant, purpose-limited, opt-in only. Your data, your choice.</p>
      </section>

      <section aria-label="Policy content" className="prose prose-invert max-w-none">
        <h2 className="text-3xl" style={{fontFamily:'var(--font-anton)'}}>Data We Collect</h2>
        <p>
          We collect only essential data needed to provide our services:
        </p>
        <ul>
          <li><strong>Account Data:</strong> Email, age verification status</li>
          <li><strong>Usage Data:</strong> Page visits, interaction patterns (anonymized)</li>
          <li><strong>Consent Records:</strong> Your explicit consent choices</li>
          <li><strong>Community Data:</strong> Posts, comments, community interactions</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>GDPR Rights</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request your data we hold</li>
          <li><strong>Rectification:</strong> Correct inaccurate data</li>
          <li><strong>Erasure:</strong> Delete your data ("right to be forgotten")</li>
          <li><strong>Portability:</strong> Export your data</li>
          <li><strong>Objection:</strong> Opt out of processing</li>
          <li><strong>Restriction:</strong> Limit how we use your data</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Purpose Limitation</h2>
        <p>
          We use your data only for explicitly consented purposes:
        </p>
        <ul>
          <li>Service provision (shop, community, radio)</li>
          <li>Age verification and safety</li>
          <li>Communication about your account</li>
          <li>Improving user experience (with consent)</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Data Sharing</h2>
        <p>
          We never sell your data. Limited sharing only occurs for:
        </p>
        <ul>
          <li>Payment processing (Shopify, encrypted)</li>
          <li>Essential services (Supabase hosting)</li>
          <li>Legal compliance when required</li>
        </ul>

        <h2 className="text-3xl mt-8" style={{fontFamily:'var(--font-anton)'}}>Contact & Requests</h2>
        <p>
          Exercise your data rights or ask questions:
        </p>
        <ul>
          <li>Email: privacy@hotmess.london</li>
          <li>Response time: 30 days maximum</li>
          <li>Verification required for security</li>
        </ul>
      </section>

      {/* Cross-links */}
      <section aria-label="Related legal pages" className="border-t border-line pt-8">
        <h2 className="text-2xl mb-4" style={{fontFamily:'var(--font-anton)'}}>Related Policies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/legal/cookies" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Cookie Policy</h3>
            <p className="text-sm opacity-70">How we use cookies</p>
          </Link>
          <Link href="/legal/terms" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Terms of Service</h3>
            <p className="text-sm opacity-70">Service agreement</p>
          </Link>
          <Link href="/moderation" className="rounded-2xl border border-line p-4 hover:bg-white/5">
            <h3>Report Issues</h3>
            <p className="text-sm opacity-70">Privacy concerns</p>
          </Link>
        </div>
      </section>
    </div>
  );
}