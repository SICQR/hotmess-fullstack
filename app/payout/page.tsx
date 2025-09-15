"use client";

import * as React from "react";
import {
  Heading,
  Paragraph,
  Button,
  Badge,
  TextInput,
  SelectList,
  Card,
  SectionLayout,
} from "@hotmess/design-system";

type Quote = { fee: number; net: number; currency: "GBP" };
type Method = "bank" | "paypal" | "wise";

export default function PayoutPage() {
  return (
    <main className="hm-container">
      <header className="hero">
        <Heading level={1}>Payouts</Heading>
        <Paragraph className="hero__sub">Scan. Grrr. Repeat.</Paragraph>
        <Paragraph className="note">
          Men-only community, 18+ creators. Payouts require verified ID and a valid payout method.
        </Paragraph>
      </header>

      <PayoutForm />
      <FooterLinks />
    </main>
  );
}

function PayoutForm() {
  const [balance] = React.useState<number>(327.40); // GBP, replace with fetch
  const [pending] = React.useState<number>(112.60);
  const [method, setMethod] = React.useState<Method | "">("");
  const [amount, setAmount] = React.useState<string>("");
  const [consent, setConsent] = React.useState<boolean>(false);
  const [quote, setQuote] = React.useState<Quote | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = React.useState<boolean>(false);
  const max = Math.max(0, balance);

  async function fetchQuote(v: number) {
    setLoading(true);
    try {
      // TODO: replace with your real endpoint
      // const res = await fetch("/api/payout/quote", { method: "POST", body: JSON.stringify({ amount: v, method }) });
      // const q = await res.json();
      const fee = Math.max(0.5, v * 0.02);
      const q: Quote = { fee, net: Math.max(0, v - fee), currency: "GBP" };
      setQuote(q);
    } finally {
      setLoading(false);
    }
  }

  function onAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^\d.]/g, "");
  setAmount(raw);
  const val = parseFloat(raw || "0");
  if (!isNaN(val) && val > 0) fetchQuote(val);
  else setQuote(null);
  }

  const canRequest = method && quote && consent && parseFloat(amount) > 0 && parseFloat(amount) <= max;

  return (
    <>
      <SectionLayout className="section" title="Balance" caption="Updated hourly">
        <div className="tiles-2">
          <div className="tile">
            <Heading level={3} visualLevel={3}>Available</Heading>
            <Paragraph className="text-2xl" aria-live="polite">£{balance.toFixed(2)}</Paragraph>
            <Paragraph className="note">Pending £{pending.toFixed(2)} • Last payout 15 Sep 2025</Paragraph>
          </div>
          <div className="tile">
            <Heading level={3} visualLevel={3}>KYC</Heading>
            <Paragraph>Identity: <Badge variant="accent" size="sm" label="Verified" /></Paragraph>
            <Paragraph className="note">Need changes? Update docs in <a className="link" href="/affiliate">Affiliate</a>.</Paragraph>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className="section" title="Request a payout">
        <div className="tiles-2">
          <div className="tile">
            <Heading level={4} visualLevel={3}>Method</Heading>
            <SelectList
              className="mt-2"
              value={method}
              onChange={(e) => setMethod((e.target as HTMLSelectElement).value as Method)}
              options={[
                { label: "Select a method", value: "" },
                { label: "Bank transfer (GB)", value: "bank" },
                { label: "PayPal", value: "paypal" },
                { label: "Wise", value: "wise" },
              ]}
            />
            {!method && (
              <Paragraph className="note mt-2">
                No method connected. Go to <a className="link" href="/affiliate">Affiliate</a> to connect one.
              </Paragraph>
            )}
          </div>

          <div className="tile">
            <Heading level={4} visualLevel={3}>Amount</Heading>
            <div className="flex items-center gap-2 mt-2">
              <TextInput
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={onAmountChange}
                placeholder="0.00"
                className="w-full"
              />
              <Button onClick={() => { setAmount(max.toFixed(2)); fetchQuote(max); }}>
                MAX
              </Button>
            </div>
            {quote && (
              <div className="mt-2">
                <Paragraph>Fee: £{quote.fee.toFixed(2)}</Paragraph>
                <Paragraph>Net: <strong>£{quote.net.toFixed(2)}</strong></Paragraph>
                <Paragraph className="note">Paid in {quote.currency}. Processing 1–3 business days.</Paragraph>
              </div>
            )}
          </div>
        </div>

        <div className="consent mt-4">
          <span className="consent__txt">
      <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent((e.target as HTMLInputElement).checked)} />
            <label htmlFor="consent" className="ml-2">
              I confirm these details are correct and I authorise HOTMESS to send this payout.
            </label>
          </span>
          <div className="consent__cta">
            <Button
              appearance="primary"
              disabled={!canRequest || loading}
              onClick={() => setConfirmOpen(true)}
              title={canRequest ? "Request payout" : "Complete all steps to request"}
            >
              {loading ? "Quoting…" : "Request payout"}
            </Button>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className="section" title="History" caption="Most recent first">
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Date</th><th>Amount</th><th>Status</th><th>Receipt</th></tr></thead>
            <tbody>
              <tr><td>15 Sep 2025</td><td>£120.00</td><td><Badge variant="accent" size="sm" label="Paid" /></td><td><a className="link" href="#">Download</a></td></tr>
              <tr><td>09 Sep 2025</td><td>£95.40</td><td><Badge size="sm" label="Processing" /></td><td>—</td></tr>
              <tr><td>31 Aug 2025</td><td>£210.00</td><td><Badge size="sm" label="Failed" /></td><td><a className="link" href="#">Retry</a></td></tr>
            </tbody>
          </table>
        </div>
      </SectionLayout>

      {confirmOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Confirm payout">
          <div className="modal__card">
            <Heading level={3} visualLevel={3}>Confirm payout</Heading>
            <Paragraph className="mt-2">Method: {method || "—"}</Paragraph>
            <Paragraph>Amount: £{(parseFloat(amount || "0")).toFixed(2)}</Paragraph>
            <Paragraph className="note mt-2">
              You’re authorising HOTMESS to send this payout. Double-check your details; reversals may incur fees.
            </Paragraph>
            <div className="actions mt-4">
              <Button onClick={()=>setConfirmOpen(false)}>Cancel</Button>
              <Button appearance="primary" onClick={() => { setConfirmOpen(false); window.alert("Payout requested. We’ve emailed a receipt."); }}>
                Confirm & send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FooterLinks() {
  return (
    <SectionLayout className="section section--tight">
      <div className="tiles-2">
        <div className="tile">
          <Heading level={4} visualLevel={4}>Need something else?</Heading>
          <ul>
            <li><a className="link" href="/affiliate">Affiliate dashboard</a></li>
            <li><a className="link" href="/onboarding">Creator onboarding</a></li>
            <li><a className="link" href="/partners">Partner integrations</a></li>
          </ul>
        </div>
        <div className="tile">
          <Heading level={4} visualLevel={4}>Privacy & legal</Heading>
          <ul>
            <li><a className="link" href="/data">Data & Privacy Hub (DSAR / deletion)</a></li>
            <li><a className="link" href="/legal">Legal (Terms, Privacy, 18+)</a></li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
