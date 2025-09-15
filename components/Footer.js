import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="container mx-auto p-6 grid md:grid-cols-4 gap-4 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li><Link href="/shop">Collections</Link></li>
            <li><Link href="/shop?category=tops">Tops</Link></li>
            <li><Link href="/shop?category=vests">Vests</Link></li>
            <li><Link href="/shop?category=shorts">Shorts</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Radio</h3>
          <ul className="space-y-1">
            <li><Link href="/radio">Listen Live</Link></li>
            <li><Link href="/shows">Shows</Link></li>
            <li><Link href="/podcasts">Podcasts</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Community</h3>
          <ul className="space-y-1">
            <li><Link href="/community">Rooms</Link></li>
            <li><Link href="/legend">Legend Board</Link></li>
            <li><Link href="/affiliate">Affiliate Program</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/care">HNH Care</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-gray-800">
        &copy; {new Date().getFullYear()} HOTMESS. All rights reserved.
      </div>
    </footer>
  );
}