import Link from 'next/link';

export default function CarePage(){
  return (
    <div className="space-y-6">
      <h1 className="text-5xl" style={{fontFamily:'var(--font-anton)'}}>Aftercare = Information & Services</h1>
      <p>If urgent, use the emergency resources listed.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/care#resources" className="underline">Resources</Link></li>
        <li><Link href="/radio/hand-n-hand" className="underline">Hand N Hand (Sun)</Link></li>
        <li><Link href="/community#rooms" className="underline">Talk to someone (rooms)</Link></li>
      </ul>
    </div>
  );
}
