"use client";
import { useEffect, useState } from "react";

const KEY = "hm.cookies.v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem(KEY);
    if (!ok) setShow(true);
  }, []);
  if (!show) return null;

  function accept() {
    localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), consent: "all" }));
    setShow(false);
  }

  return (
    <div className="hm-cookie" role="dialog" aria-live="polite">
      <div className="hm-container cookie-row">
        <p>Cookies for analytics and improvements. Choose your level.</p>
        <div className="cookie-ctas">
          <a className="btn ghost" href="/data#cookies">Customize</a>
          <button className="btn solid" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
}
