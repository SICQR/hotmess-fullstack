export default function QRPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Get Your QR</h1>
      <p className="text-lg opacity-80">Scan-to-earn via QR. UTM tracked 30 days.</p>
      {/* TODO: Implement QR code generation and tracking */}
      <div className="rounded-2xl border border-line p-6 text-center">
        <p className="text-muted text-sm">QR Code generation not yet implemented</p>
      </div>
    </div>
  );
}