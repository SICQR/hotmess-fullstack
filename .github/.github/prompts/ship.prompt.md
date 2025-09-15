---
mode: 'hotmess-ship'
model: GPT-4o
description: SHIP {thing} — produce final copy + flows + compliance + KPIs + next actions.
tools: ['edit','codebase','search','terminal']
---
INPUTS:
- thing: ${input:thing:what are we shipping?}
- route: ${input:route:/route}
- deadline: ${input:deadline:today}

GOAL:
Ship "${thing}" at "${route}" aligned to HOTMESS canon (Anton headings, #FF5300 accent), with working routes and no dead ends.

CONSTRAINTS:
- Men-only, 18+. Consent prompts before high-risk actions.
- Aftercare = information/services — not medical advice.
- Cross-link: Home, Shop, HNH MESS, Radio, Records, Affiliate, Care (Hand N Hand), Community, About, Legal.
- No crown. TAGLINE: "ALWAYS TOO MUCH, YET NEVER ENOUGH".

DELIVER:
1) Exec summary (3 bullets)
2) Final copy (hero, subheads, CTAs, microcopy, alt text)
3) Flows (no dead ends; cross-links)
4) Compliance
5) KPIs
6) Next 3 actions

START with: "You said: “${thing}” at ${route}."
