"use client";
import { useState } from "react";

export default function PlayerDock() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="hm-player" role="region" aria-label="Radio player dock">
      <div className="hm-container dock-row">
        <button
          className="dock-btn"
          onClick={() => setPlaying(v => !v)}
          aria-pressed={playing}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "Pause" : "Play"}
        </button>
        <div className="now">
          <strong>Now Playing:</strong> {"{Show}"} — {"{Track}"}
        </div>
        <a className="dock-link" href="/radio">Open Radio</a>
      </div>
    </div>
  );
}
