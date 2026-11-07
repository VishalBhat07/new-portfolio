# Projects ledger redesign — spec

Date: 2026-11-07 · Status: approved (user)

## Decision

Replace the image-card "Selected work" section with an **image-free featured
ledger + inline expandable archive** (Option 1 from brainstorming). No new
dependencies. Aesthetic must stay within the existing `index.css` design
system (paper/ink editorial, hairlines, Space Grotesk display type, micro-caps
meta).

## Featured set (user-picked, exact order)

1. EdgeInference RL
2. IR-Repair
3. NeuralShield
4. CPU Scheduling Visualizer
5. AutoDoc
6. Sign-ify

## Data changes (`src/data/projects.js`)

- New "Research" category (done earlier today): EdgeInference RL, Sign-ify,
  IR-Repair — all `Completed`, links to sign-ify + llm-ir-repair under
  VishalBhat07, IDP work under VaibhavPRoddappanavar/IDP (teammate repo).
- "Pothole Detection & Analysis" stub replaced by "PotholeGPS" pointing at the
  IDP repo (done).
- Add a `stack` array to the six featured entries for the ledger meta line.

## UI spec (`src/App.jsx` + `src/index.css`)

### Featured ledger

- Six rows, whole row is one link to `live || url`, hairline separators.
- Row grid: index number (`01`–`06`, micro-caps muted) · name in Space Grotesk
  ~clamp(30px, 4.2vw, 54px) · one-liner desc · meta line
  `STATUS · STACK.TAGS` (micro-caps muted) · right arrow (faded, rises and
  fades in on hover).
- No images anywhere in the section.

### Inline archive

- Toggle button under the ledger, micro-caps with `+` caret (rotates to ×,
  same affordance as the experience accordion): "View all N more projects ↗"
  where N = total items in dataset − featured count (computed, currently 38).
- Expanded panel: grouped by category (featured projects excluded; empty
  categories skipped). Each group: category label (micro-caps muted, in the
  shared micro-caps selector list) + dense one-line rows: name (16px Space
  Grotesk) + muted one-liner + optional `IN PROGRESS` marker.
- Rows link out via `live || url`; `#` placeholders (RideSecure, BotanyCloud)
  render as plain text, not links.
- Panel entrance: own keyframe rise animation — NOT the scroll-reveal class
  (dynamically-mounted `.reveal` elements are never observed).

## Behavior / a11y

- Toggle button keeps `aria-expanded`; caret rotates 45° like existing `.plus`.
- Rows keep `loading` semantics: all featured rows exist at mount so the
  existing IntersectionObserver reveal still applies.
- Mobile: ledger collapses to [index | body] grid, arrow hidden, h3 shrinks;
  archive becomes single-column groups with wrapped rows.
- `prefers-reduced-motion` handled by the existing global override.

## Out of scope

- Deleting legacy `src/components/**` dead code, missing project images,
  font-loading dedupe, AutoDoc's placeholder GitHub URL (user may supply later).

## Verification

- `npm run build` passes; `npm run lint` adds no new issues vs baseline
  (baseline errors all live in legacy components).
- Visual check on the running dev server (localhost:5173).
