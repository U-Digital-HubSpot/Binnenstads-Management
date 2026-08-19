# 01 — Objecten (review)

## Doel

## Wat we aanmaken of wijzigen

## Technische namen (EN)

| Label (NL) | Internal name | Type (standard / custom) | Opmerking |
|-------------|-----------------|---------------------------|------------|

## Afhankelijkheden

## Risico’s en conflicten

## Conflicten en open punten

## Bronnen

- Transcript:
- Implementatieplan:

## Machine-spec (stap 01 CLI)

Na akkoord wordt `specs/01-objects.json` gevuld. Daarin kunnen naast `customObjects` ook **`propertyGroups`**, **`properties`** en **`associationLabels`** (custom association labels tussen twee objecttypen) staan — zelfde apply-stap na schema’s. Zie voorbeeld: `.cursor/skills/hubspot-design-and-build/tools/examples/01-objects.example.json`.

- Standaard objecten: `objectType` bijv. `companies`, `contacts`, `deals`, `tickets`.
- Custom object uit deze spec: `objectType` als `custom:` + internal name, bijv. `custom:service_agreement`.
- Property groups **vóór** properties in de JSON zetten die bij hetzelfde object horen.

## Concept JSON (illustratief, geen apply)

```json
{}

```
