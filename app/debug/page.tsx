export default function Debug() {
  return (
    <main className="hm-container">
      <section className="hero">
        <h1>STYLE PROBE</h1>
        <p className="hero__sub">If this is BIG + uppercase with pill buttons, CSS is loaded.</p>
        <div className="cta-row">
          <a className="btn btn--primary" href="#">Primary</a>
          <a className="btn btn--secondary" href="#">Secondary</a>
        </div>
      </section>
      <section className="section">
        <div className="rails">
          <div className="tile"><h3>Tile A</h3><p className="note">Note text</p></div>
          <div className="tile"><h3>Tile B</h3><p className="note">Note text</p></div>
          <div className="tile"><h3>Tile C</h3><p className="note">Note text</p></div>
          <div className="tile"><h3>Tile D</h3><p className="note">Note text</p></div>
        </div>
      </section>
    </main>
  );
}
