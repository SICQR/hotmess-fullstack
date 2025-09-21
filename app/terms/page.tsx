export default function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Terms of Service</h1>
      <div className="space-y-4 text-sm">
        <p>Last updated: [DATE NEEDED]</p>
        <div className="rounded-2xl border border-line p-6">
          <h2 className="text-xl mb-4">Age Restriction Notice</h2>
          <p className="text-muted">18+ only. Men-only platform.</p>
          <p className="text-muted mt-2">Terms of service content needs to be provided by legal team.</p>
        </div>
      </div>
    </div>
  );
}