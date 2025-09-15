
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isLive, setIsLive] = useState(false);
  // Placeholder: you can fetch live status from Supabase or your streaming API
  useEffect(() => {
    // Example: check live status from API or supabase
    // setIsLive(true);
  }, []);
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="font-bold text-2xl">HOTMESS</span>
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/shop">Shop</Link>
          <Link href="/radio">Radio</Link>
          <Link href="/records">Records</Link>
          <Link href="/community">Community</Link>
          <Link href="/affiliate">Affiliate</Link>
          <Link href="/care">Care</Link>
          <Link href="/xxx">XXX</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isLive && <span className="bg-red-600 px-3 py-1 text-sm rounded-full">LIVE</span>}
          <Link href="/account">Account</Link>
        </div>
      </div>
    </header>
  );
}