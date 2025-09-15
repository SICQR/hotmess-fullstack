import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hm-footer">
      <div className="hm-container footer-grid">
        <section>
          <h3>SHOP</h3>
          <ul>
            <li><Link href="/shop#collections">Collections</Link></li>
            <li><Link href="/shop#tops">Tops</Link></li>
            <li><Link href="/shop#vests">Vests</Link></li>
            <li><Link href="/shop#shorts">Shorts</Link></li>
          </ul>
        </section>
        <section>
          <h3>RADIO</h3>
          <ul>
            <li><Link href="/radio">Listen Live</Link></li>
            <li><Link href="/shows">Shows</Link></li>
            <li><Link href="/podcasts">Podcasts</Link></li>
          </ul>
        </section>
        <section>
          <h3>COMMUNITY</h3>
          <ul>
            <li><Link href="/community#rooms">Rooms</Link></li>
            <li><Link href="/community/legend">Legend Board</Link></li>
            <li><Link href="/affiliate">Affiliate Program</Link></li>
          </ul>
        </section>
        <section>
          <h3>ABOUT</h3>
          <ul>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/care">HNH Care</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </section>
      </div>
      <div className="hm-container footer-legal">
        <small>
          © {new Date().getFullYear()} HOTMESS London. Men-only, 18+. HNH MESS funds real aftercare.
          <span className="sep">•</span><a href="/legal">Legal</a>
          <span className="sep">•</span><a href="/data">Data & Privacy Hub</a>
          <span className="sep">•</span><a href="/accessibility">Accessibility</a>
          <span className="sep">•</span><a href="/press">Press Room</a>
        </small>
      </div>
    </footer>
  );
}
