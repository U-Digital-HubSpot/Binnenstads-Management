# HubSpot CRM Build

Deze map is de vaste root voor HubSpot-buildartefacten in de klantrepo. Twee skills gebruiken **verschillende submappen** zodat niets door elkaar loopt:

## `hubspot-design-and-build`

Review-MD’s, JSON-specs, apply-logs en voortgang voor portal-build (Private App, dry run, apply).

- `reviews/` — consultant-reviewbestanden (`01-objects.md` … `05-workflows.md`, plus `00-consultant-signoff.md`)
- `specs/` — machineleesbare JSON per stap
- `logs/` — dry-run markdown en apply-json per stap
- `state.json` — voortgang en opgeslagen id’s

CLI-voorbeeld vanuit klantrepo-root:

`node .cursor/skills/hubspot-design-and-build/tools/cli.js dry-run --root "Build/HubSpot CRM" --step 01`

## `hubspot-implementation-design`

Design-meeting voorbereiding en deliverables **vóór** of naast de build-flow hierboven.

- `design-meeting/` — markdown + Excel + api import van project en taken gekoppeld aan developer `projects-import-*.csv` en `logs/` voor stap 6b (HubSpot-projecttaken)

CLI-voorbeeld:

`node .cursor/skills/hubspot-implementation-design/tools/cli.js build-excel --md "Build/HubSpot CRM/design-meeting/HubSpot Design meeting – {Klant} – {YYYY-MM-DD}.md"`

Transcripten voor beide flows: **`Input/Transcripts/`** (geen kopie onder `Build/` vereist).
