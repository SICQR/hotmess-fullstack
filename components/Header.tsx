import Link from "next/link";

export default function Header() {
  return (
    <header className="hm-header">
      <div className="hm-container header-row">
        <Link href="/" className="logo">HOTMESS</Link>
        <nav className="hm-nav" aria-label="Primary">
          <Link href="/shop">Shop</Link>
          <Link href="/radio">Radio</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>
          <Link href="/care" className="care">HNH Care</Link>
        </nav>
      </div>
    </header>
  );
}
