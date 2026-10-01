---
title: Platform Binnenstadsmanagement — Klantreis in HubSpot
subtitle: Gemeente Dordrecht, van gesprek naar match
author: U Digital
date: 2026-09-08
cover: true
---

# Eén stad. Eén verhaal.

We volgen **Gemeente Dordrecht**. Sophie van Beek is contactpersoon binnenstad. Ze heeft een vraag over financiering van samenwerking met eigenaren — een thema dat in meer steden speelt.

Het uitvoerend team van Platform Binnenstadsmanagement faciliteert de koppeling. Jullie blijven tussen de steden staan. HubSpot helpt om gesprekken, matchmaking, expertise en vervolgacties op één plek vast te leggen.

Dit document loopt dat verhaal door. Daarna openen we HubSpot en klikken we dezelfde stappen.

---

# Jouw situatie

Platform Binnenstadsmanagement verbindt circa 70 binnensteden in Nederland en Vlaanderen met partners en kennisinstellingen. Het uitvoerend team werkt parttime. Leden betalen een lidmaatschap; jullie leveren onder meer bijeenkomsten, de Binnenstadsbarometer, matchmaking en inspiratie.

De shift gaat van grote massabijeenkomsten naar één-op-één kennisdeling. Daarbij komt veel informatie vrij uit gesprekken met steden. Die data staat nu verspreid over Excel, Teams, e-mail, MailChimp en City Connect.

**Tools vandaag:** Microsoft Outlook & Teams · Excel · City Connect · MailChimp · Twinfield (via administratiekantoor) · LinkedIn & website

**Wat nu lastig is**

- Gespreksinformatie en matchmaking zitten in losse lijsten en systemen
- Geen centraal overzicht wie wat heeft afgesproken met welke stad
- Open vragen uit gesprekken worden soms te laat opgepakt
- Event-aanmeldingen en nieuwsbrief lopen via losse kanalen
- Weinig zicht op hoe actief elk lidmaatschap is
- Kleine ploeg — het systeem moet ontzorgen, niet extra werk geven

---

# Scenario 1 — Matchmaking na een stadsgesprek

## De reis

<table style="width:100%; border-collapse:collapse; font-size:9pt; margin:12pt 0;">
<tr>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center; border-radius:4pt 0 0 4pt;">Teams-gesprek</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Verslag in HubSpot</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Matchmaking vastleggen</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Zoeken op match</td>
<td style="background:#363a44; color:white; padding:8pt 4pt; text-align:center; border-radius:0 4pt 4pt 0;">Jullie faciliteren intro</td>
</tr>
</table>

## Wat gebeurt er

Sophie bespreekt in Teams een gevoelige vraag over financiering van samenwerking met eigenaren. Het gesprek wordt opgenomen en komt op het record van Gemeente Dordrecht. HubSpot maakt een samenvatting met actiepunten.

Het uitvoerend team legt de matchmaking en interesse vast en noteert dat de vraag vertrouwelijk is. Daarna zoeken ze welke andere steden dezelfde vraag hebben of daar al expertise hebben — bijvoorbeeld Nijmegen of Breda. Jullie nemen contact op om een koppeling te regelen. Steden zien elkaars data niet zelf.

## Het datamodel

Matchmaking bouwt op een eenvoudig datamodel. **Bedrijf** staat voor de stad of organisatie. **Contact** zijn de personen binnen die stad. Op het stad-record hangen meetings, notities en taken.

Drie custom objects maken matchmaking schaalbaar:

| Object | Rol |
|---|---|
| **Matchmaking** | Eén concrete vraag van een gemeente, gekoppeld aan de stad. Status: open, in behandeling of afgerond. |
| **Expertise** | Kennis die een gemeente heeft — taxonomie met hoofd- en subgebied (bv. Samenwerking → Financiën). Elk expertise-record is vast, niet een losse tag. |
| **Interesse** | Informatiebehoefte van een gemeente — verbindt stad, matchmaking en relevante expertise. |

Een stad kan meerdere matchmaking-records hebben. Een matchmaking kan aan meerdere expertise-gebieden hangen. Zo blijft zoeken consistent — ook als de taxonomie later groeit.

![Datamodel voor matchmaking met custom objects Matchmaking, Expertise en Interesse](assets/datamodel-matchmaking.png)

## Werkwijze: handmatig en via Breeze

**Handmatig (altijd mogelijk)**

Iemand uit het uitvoerend team opent het stad-record na een gesprek. Die persoon maakt een **Matchmaking**-record aan, koppelt de juiste **Expertise** en legt de **Interesse** vast. Status gaat op *open*. Vertrouwelijkheid en een korte samenvatting worden handmatig ingevuld. Daarna opent het team een lijst op dezelfde expertise om matches te zoeken.

**Automatisch via Breeze (met review)**

Na een Teams-gesprek doet Breeze drie dingen op basis van het transcript:

1. **Samenvatting** op de timeline van de stad — wie sprak, wat was de kernvraag, welke actiepunten.
2. **Expertise-voorstel** — Breeze suggereert het passende Expertise-record (bv. Samenwerking → Financiën). Het team bevestigt of past aan.
3. **Matchmaking-voorstel** — Breeze stelt voor om een Matchmaking-record aan te maken en de Interesse te koppelen. Het team reviewt en slaat op.

Breeze vult dus het voorwerk in. Jullie team controleert altijd voordat iets definitief wordt — zeker bij vertrouwelijke vragen. Geen automatische koppeling tussen steden zonder menselijke goedkeuring.

## Nu → Straks

| Nu | Straks |
|---|---|
| Gespreksverslag in Excel, verspreid over mappen | Gesprek en samenvatting op het stad-record in HubSpot |
| Handmatig zoeken wie hetzelfde vraagstuk heeft | Filter op expertise: open matchmaking vs. beschikbare kennis |
| Context zit in het hoofd van collega's | Collega ziet direct wat er besproken is en wat openstaat |

## Stap voor stap

| # | Actie | Wie |
|---|---|---|
| 1 | Teams-gesprek met Sophie van Beek (Gemeente Dordrecht) | Uitvoerend team |
| 2 | Transcript en samenvatting op company-record | HubSpot + Teams |
| 3 | Matchmaking, interesse en vertrouwelijkheid vastleggen | Uitvoerend team |
| 4 | Lijst met steden op zelfde expertise openen | Uitvoerend team |
| 5 | Match faciliteren tussen Dordrecht en Nijmegen | Uitvoerend team |

![Stad-record met gesprekssamenvatting en open vraag](assets/matchmaking-record.png)

![Overzicht steden met vergelijkbare expertise](assets/matchmaking-lijst.png)

<div style="page-break-before: always;"></div>

# Scenario 2 — Event-aanmelding en gerichte uitnodiging

## De reis

<table style="width:100%; border-collapse:collapse; font-size:9pt; margin:12pt 0;">
<tr>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center; border-radius:4pt 0 0 4pt;">Event op website</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Aanmelding in HubSpot</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Bevestiging</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Herinnering</td>
<td style="background:#363a44; color:white; padding:8pt 4pt; text-align:center; border-radius:0 4pt 4pt 0;">Deelnemerslijst klaar</td>
</tr>
</table>

## Wat gebeurt er

De Dag voor de Binnenstad heeft een deelsessie over samenwerking met eigenaren. Sophie meldt zich aan via het formulier op jullie website. Haar contact en organisatie komen direct in HubSpot. Ze hoort dezelfde dag een bevestiging.

Een week voor het event krijgt ze een herinnering. Het uitvoerend team trekt met één klik een deelnemerslijst voor de locatie. Steden die eerder interesse toonden in dit onderwerp kunnen proactief worden uitgenodigd — zonder handmatig in Excel te zoeken.

## Nu → Straks

| Nu | Straks |
|---|---|
| Aanmelding via website, opvolging handmatig | Formulier vult contact en stad automatisch aan |
| Bevestiging en herinnering los versturen | Workflow stuurt mails op vaste momenten |
| Deelnemerslijst zelf bijhouden | Lijst en export uit één systeem |
| Uitnodiging op interesse kost veel zoekwerk | Segment op interesse per contact |

## Stap voor stap

| # | Actie | Wie |
|---|---|---|
| 1 | Sophie meldt zich aan voor deelsessie op de website | Sophie |
| 2 | Contact gekoppeld aan Gemeente Dordrecht | HubSpot |
| 3 | Bevestigingsmail automatisch verstuurd | Workflow |
| 4 | Herinnering 7 dagen voor het event | Workflow |
| 5 | Deelnemerslijst exporteren voor de bijeenkomst | Uitvoerend team |

![Aanmelding via website naar HubSpot en opvolging](assets/event-aanmelding.png)

<div style="page-break-before: always;"></div>

# Scenario 3 — Engagement per lidmaatschap

## De reis

<table style="width:100%; border-collapse:collapse; font-size:9pt; margin:12pt 0;">
<tr>
<td style="background:#363a44; color:white; padding:8pt 4pt; text-align:center; border-radius:4pt 0 0 4pt;">Data verzamelen</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Score berekenen</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Signaal bij daling</td>
<td style="background:#FF4B0F; color:white; padding:8pt 4pt; text-align:center;">Taak aan team</td>
<td style="background:#363a44; color:white; padding:8pt 4pt; text-align:center; border-radius:0 4pt 4pt 0;">Proactief contact</td>
</tr>
</table>

## Wat gebeurt er

HubSpot combineert signalen per stad: event-deelname, e-mailreacties, matchmaking-contact en openstaande vragen. Gemeente Dordrecht scoort gemiddeld — Sophie heeft een open vraag en was lang niet op een bijeenkomst.

Het uitvoerend team krijgt een taak om contact op te nemen. Zo voorkom je dat een lid het gevoel krijgt dat jullie niet meer reageren. Het bestuur ziet in één dashboard welke steden extra aandacht nodig hebben.

## Nu → Straks

| Nu | Straks |
|---|---|
| Geen overzicht hoe actief een lid is | Engagement score per stad in HubSpot |
| Open vragen in Excel of mail | Taken en signalen op het stad-record |
| Proactief contact op gevoel | Dashboard toont welke steden aandacht nodig hebben |
| Rapportages handmatig samenstellen | Vaste rapporten over deelname en matchmaking |

## Stap voor stap

| # | Actie | Wie |
|---|---|---|
| 1 | HubSpot berekent engagement op basis van events, mail en gesprekken | HubSpot |
| 2 | Dordrecht scoort onder drempel — taak voor uitvoerend team | Workflow |
| 3 | Contact opnemen met Sophie over open vraag en komende sessie | Uitvoerend team |
| 4 | Bestuur bekijkt dashboard met steden die aandacht nodig hebben | Bestuur |
| 5 | Vervolg: matchmaking afronden en score laten stijgen | Team |

![Dashboard engagement en steden die aandacht nodig hebben](assets/engagement-dashboard.png)

**Aanname tot we bevestigen:** de volledige Customer Success Workspace vereist Service Hub Enterprise. In de demo tonen we het principe via engagement score en taken op company-records.

<div style="page-break-before: always;"></div>

# Daarna openen we HubSpot

Het verhaal hierboven is de use case. In de portal klikken we dezelfde stappen.

| # | In de portal | Scenario |
|---|---|---|
| 1 | Company-record Gemeente Dordrecht openen | 1 |
| 2 | Meeting op timeline + samenvatting bekijken | 1 |
| 3 | Datamodel: Matchmaking, Expertise en Interesse als custom objects | 1 |
| 4 | Lijst/filter op expertise financiering samenwerking | 1 |
| 5 | Event-formulier op website + testinzending | 2 |
| 6 | Workflow bevestiging en herinnering tonen | 2 |
| 7 | Engagement score op company-record | 3 |
| 8 | Dashboard lidmaatschap en event-deelname | 3 |
| 9 | Taak bij openstaande vraag of lage score | 1, 3 |

**Later:** koppeling met City Connect, volledig ledenportaal en Twinfield vallen buiten de eerste fase. We bespreken die stappen in het implementatieplan.

## Wat we nog van jullie nodig hebben

1. Wie beslist formeel tussen HubSpot en Dynamics — en op welke criteria?
2. Hebben jullie de expertise-taxonomie voor matchmaking al op papier staan?
3. Hoeveel HubSpot-gebruikers worden het: alleen het uitvoerend team of ook bestuursleden?

<div style="page-break-before: always;"></div>

# Indicatie investering

Zoals besproken in het verkenningsgesprek van **19 augustus 2026**. Dit zijn indicatieve bedragen — geen offerte.

## Jullie uitgangspunt

- Richting **€5.000–7.500 per jaar** als maximum voor licenties
- **3–4 gebruikers** (uitvoerend team)
- Implementatiekosten apart bekeken; geen groot pakket met ongebruikte functionaliteit

## HubSpot-licenties

HubSpot werkt met seats. Voor jullie scenario past **Professional** — Starter is te beperkt, Enterprise niet nodig.

| Seat-type | Prijs | Wanneer |
|---|---|---|
| **Front Office** | €120 per maand | Teams-integratie, meetings opnemen, transcriptie |
| **Core** | €60 per maand | Marketing, workflows, events — geen meeting-opname |

**Rekenvoorbeeld uit het gesprek**

- 3 Front Office seats (uitvoerend team)
- E-mailmarketing Pack Small: €200 per maand
- Totaal indicatie vóór korting: ~€570 per maand
- Met jaarbetaling (10% korting) en mogelijke korting op de mailbundel: **~€6.000 per jaar**

Dat past binnen jullie licentie-uitgangspunt. Definitieve prijs en korting bevestigen we bij een offerte.

## U Digital — implementatie

We werken in twee fases:

| Fase | Wat | Indicatie | Doorlooptijd |
|---|---|---|---|
| **1. Implementatieplan** | 2 meetings, proces in kaart, matchmaking-ontwerp, begroting | **€2.250** eenmalig | ~10 werkdagen |
| **2. Implementatie** | Inrichting HubSpot op basis van het plan | **€3.000–4.000** (basic) of **€8.000–10.000** (veel maatwerk) | 4–6 weken |

Keuzes in fase 2 maken we samen na het plan. **City Connect** valt niet in deze scope.

## Totaalbeeld eerste jaar

| Post | Indicatie |
|---|---|
| HubSpot-licenties (jaar) | ~€6.000 |
| Implementatieplan | €2.250 |
| Implementatie (basic) | €3.000–4.000 |
| **Eerste jaar totaal (basic)** | **~€11.000–12.000** |

Licenties en implementatie zijn aparte posten. Het budget van €5.000–7.500 gold voor **jaarlijkse licentiekosten**, niet voor implementatie.

## Wat hier niet in zit

- Integratie met **City Connect** of **Twinfield** (facturatie blijft bij administratiekantoor)
- Extra Front Office seats voor **bestuursleden** (~7 personen die incidenteel gesprekken voeren)
- Definitieve HubSpot-korting — die bevestigen we bij offerte

*Prijzen en seat-aantallen kunnen wijzigen op basis van definitieve scope en HubSpot-tarieven.*
