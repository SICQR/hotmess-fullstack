import Link from 'next/link';

export default function CommunityPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Bring your crew. Bank the rewards.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/community#rooms" className="rounded-2xl border border-line p-4">Join Rooms</Link>
        <Link href="/qr" className="rounded-2xl border border-line p-4">Get Your QR</Link>
        <Link href="/legend" className="rounded-2xl border border-line p-4">Legend Board</Link>
      </div>
    </div>
  );
}
