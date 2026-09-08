---
customer: Platform Binnenstadsmanagement
date: 2026-09-08
language: nl
hubs: [marketing, service]
demo_format: on-site
attendees:
  - name: Ad Dekkers
    role: Bestuurslid / coördinatie uitvoering
  - name: Janny van Empel
    role: Secretariaat, bijeenkomsten en operatie
sources:
  - Input/Transcripts/2026-08-19_verkenning-hubspot.md
  - Input/Documents/Programma van Eisen CRM.pdf
---

# HubSpot Demo Prep — Platform Binnenstadsmanagement

**Client name:** Platform Binnenstadsmanagement
**Website:** https://binnenstadsmanagement.org
**Industry:** Non-profit netwerkorganisatie (binnensteden NL & Vlaanderen)
**Demo format:** On-site (U Digital, Eindhoven)
**Document date:** 2026-09-08
**Last updated:** 2026-09-08

---

## 1. Demo summary

### Summary slide text
Platform Binnenstadsmanagement verbindt circa 70 Nederlandse en Vlaamse binnensteden met elkaar, met partners uit het bedrijfsleven en met kennisinstellingen. Het doel: kennis delen, inspireren en samenwerken aan vitale, toekomstbestendige centra.

Het uitvoerend team (3 personen, parttime) coördineert het jaarprogramma: 3–5 bijeenkomsten per jaar, de Verkiezing Meest Inspirerende Binnenstadsproject, de Binnenstadsbarometer en intensief matchmaking tussen steden. Leden betalen een lidmaatschap; partners leveren diensten aan binnensteden.

De organisatie wil de verschuiving van grote massabijeenkomsten naar één-op-één kennisdeling en matchmaking beter ondersteunen met één centraal systeem — zonder de persoonlijke, vertrouwelijke rol van het platform als intermediair te verliezen.

### Current tool stack
- Microsoft Outlook & Teams (communicatie, vergaderingen, documenten)
- Excel (gespreksverslagen, matchmaking-lijsten, facturatie-overzicht per stad)
- Chenos / City Connect (intranet voor leden en partners: contacten, uitnodigingen, berichten)
- MailChimp (nieuwsbrief, ~6–7 mailings per jaar, max. ~2000 ontvangers)
- Twinfield (facturatie via extern administratiekantoor — blijft buiten CRM)
- LinkedIn & eigen website (promotie events; aanmeldingen via websiteformulier)
- Binnenstadsbarometer (eigen online tool, los van CRM)

### Main challenges
- Enorme hoeveelheid informatie uit gesprekken met steden; nu knip-en-plakwerk tussen Excel, Teams, e-mail en City Connect
- Matchmaking is handmatig: wie heeft welke vraag, expertise of oplossing — op thema's zoals samenwerking, financiering, klimaat, leefbaarheid
- Geen centraal overzicht wie wat heeft afgesproken; risico op vergeten reacties op vragen uit gesprekken
- Data verspreid over meerdere personen en systemen ("you never know van wie heeft nu wat afgesproken")
- Kleine parttime ploeg (3 FTE-equivalent) — systeem moet ontzorgen, niet complex worden
- Vertrouwelijke en soms politiek gevoelige vragen van steden; leden mogen niet zelf in elkaars data zoeken
- Ledenadministratie en facturatie-Excel los van relatiebeheer; dubbele invoer contactgegevens (City Connect + Excel)
- Geen inzicht in engagement per lid: hoe actief is een lidmaatschap, wie reageert, wie mist events
- Budget beperkt (€5k–7,5k/jaar licenties); angst voor te groot pakket met ongebruikte functionaliteit
- Vergelijking met Dynamics 365 en andere tools loopt nog; besluit na vakantieperiode (verwacht eind september)

### Demo structure
1. **Opening & context** — hun vraagstuk samenvatten; bevestigen dat dit geen sales-CRM-demo is maar een netwerk-/relatieplatform
2. **Relatiebeheer & datamodel** — stad/gemeente als company, contactpersonen (3–4 per stad), partners, thema's/tags, lidmaatschapstype
3. **Matchmaking-scenario** — Teams-gesprek → transcriptie/verslag → thema's taggen → zoeken op vergelijkbare vraag of expertise (begeleid, niet self-service)
4. **Evenementen & communicatie** — website-aanmelding → HubSpot, uitnodiging op thema/deelsessie, herinneringen, deelnemerslijst
5. **Ledenadministratie & engagement** — lidmaatschapstypes, Customer Success Score, signalen bij lage activiteit of openstaande vragen
6. **Intranet / ledenportaal** — wat HubSpot kan als communicatielaag (niet City Connect vervangen in fase 1; wel visie op overlap)
7. **Rapportages & afsluiting** — engagement per stad, event-deelname, open taken; vervolgstappen implementatieplan

---

## 2. Data model ideas

### Company properties
| Property | Why relevant in this demo |
|---|---|
| `Lidmaatschapstype` (dropdown: Stad, Partner profit, Partner non-profit, Kennisinstelling) | PvE §4; verschillende rechten en communicatie per type |
| `Lidmaatschap status` (Actief / Inactief / Prospect) | Ledenadministratie; filter voor mailings en events |
| `Regio / land` (NL / Vlaanderen) | Segmentatie bijeenkomsten (o.a. internationaal België) |
| `Thema-interesses` (multi-checkbox) | Matchmaking & gepersonaliseerde event-uitnodigingen (PvE §14) |
| `Expertise-thema's` (multi-checkbox) | Waar heeft deze stad kennis/ervaring om te delen |
| `Open vraagstukken` (multi-line / gekoppelde custom records) | Matchmaking-input uit gesprekken |
| `Customer Success Score` (HubSpot health score) | Engagement per lid; proactief ingrijpen |
| `Facturatie-contact` (contact association) | Koppeling naar facturatie-Excel/Twinfield-proces (handmatig export) |
| `Laatste matchmaking-datum` | Wanneer is stad voor het laatst gekoppeld aan andere stad |

### Contact properties
| Property | Why relevant in this demo |
|---|---|
| `Rol in binnenstad` (dropdown) | Segmentatie nieuwsbrief en events |
| `Primair contactpunt` (boolean) | 3–4 contacten per gemeente; wie benaderen |
| `Thema-voorkeuren` (checkbox) | Gepersonaliseerde uitnodigingen deelsessies |
| `Nieuwsbrief-abonnee` (boolean) | MailChimp-vervanging; breder dan alleen leden |
| `Event-deelname historie` (rollup via associaties) | Engagement-meting |

### Deal properties
| Property | Why relevant in this demo |
|---|---|
| *Geen klassieke sales pipeline* | Geen B2B-verkoop; optioneel **lidmaatschap renewal** als simplified deal voor visualisatie |
| `Renewal jaar` | Jaarlijkse facturatiecyclus |
| `Lidmaatschapsbedrag` | Ter referentie (factuur gaat via Twinfield) |
| `Betaalstatus` (nice-to-have, PvE §4 voetnoot) | Alleen tonen als relevant; niet kern van demo |

### Possible custom objects
| Custom object | Why this could matter |
|---|---|
| **Thema** | Vaste taxonomie met hoofd- en subthema (Samenwerking → Financiën). Gekoppeld aan matchmaking-vragen en event-uitnodigingen. Niet alleen een losse tag. |
| **Matchmaking-vraag** | Vastleggen vraag per stad: type (zoekt hulp / heeft expertise), status, vertrouwelijkheid, gekoppelde thema's |
| **Gespreksverslag** (of Note + AI summary) | Kern van matchmaking; gekoppeld aan company + thema's via Breeze |
| **Event / Bijeenkomst** | PvE §5; deelsessies, congressen, verkiezing |
| **Project / Werkgroep** | PvE §7; betrokken organisaties, documenten, open acties |

### Thema-object (detail)
| Property | Type | Doel |
|---|---|---|
| `thema_naam` | Text | Bv. Samenwerking |
| `subthema_naam` | Text | Bv. Financiën |
| `bovenliggend_thema` | Association → Thema | Hiërarchie hoofd/sub |
| `actief` | Boolean | Alleen actieve thema's in dropdowns |

### Matchmaking-vraag-object (detail)
| Property | Type | Doel |
|---|---|---|
| `vraag_samenvatting` | Text | Kernvraag in 1–2 zinnen |
| `type` | Dropdown | Zoekt hulp / Heeft expertise |
| `status` | Dropdown | Open / In behandeling / Gekoppeld / Gesloten |
| `vertrouwelijk` | Boolean | Bepaalt wat deelbaar is bij match |
| `bron_meeting` | Association | Teams-gesprek waar vraag uit kwam |
| `thema` | Association → Thema | Eén of meer thema-records |

### Breeze-werkwijze (demo)
- **Handmatig:** na gesprek matchmaking-vraag aanmaken, Thema uit lijst kiezen, status en vertrouwelijkheid invullen.
- **Automatisch (met review):** Breeze vat transcript samen, stelt Thema + matchmaking-vraag voor; team bevestigt voordat het record definitief wordt.

### Notes for demo usage
- Gebruik **Companies = steden/gemeenten/organisaties** en **Contacts = personen** — geen deals-pipeline als hoofdverhaal
- Rode draad-stad: bijv. fictieve **Gemeente Dordrecht** of echte voorbeeldstad uit hun netwerk (check met Ad)
- Toon **vertrouwelijkheidsniveau** op notities (intern / deelbaar met match) — Ad benadrukte politiek gevoelige vragen
- Marlon (3e teamlid) niet in de kamer; demo richten op Ad + Janny als dagelijkse gebruikers
- Twinfield-integratie **niet** beloven; Excel-export voor administratiekantoor is realistischer

---

## 3. Customer journey

### Recommended customer journey story
- **Stad meldt vraag** — Gemeente X heeft in een Teams-gesprek met Platform BM een vraag over financiering van samenwerking tussen gemeente en eigenaren (vertrouwelijk)
- **Vastleggen & verrijken** — Uitvoerend team legt gesprek vast (transcriptie + samenvatting + actiepunten), koppelt thema-tags en openstaande vragen aan het company-record
- **Matchmaking** — Consultant zoekt in HubSpot: welke andere steden hebben vergelijkbare vraag of succesvolle aanpak; Platform BM faciliteert intro (niet automatisch zichtbaar voor leden)
- **Event-koppeling** — Komende Dag voor de Binnenstad heeft deelsessie over samenwerking; gepersonaliseerde uitnodiging naar contacten die dit thema hebben aangegeven
- **Follow-up & vertrouwen** — Taak/reminder: reageer op openstaande vraag uit gesprek; Customer Success Score daalt als stad lang niet reageert op events of matchmaking

### How to show the journey in HubSpot
1. Open company-record **Gemeente [X]** — contacten, thema-interesses, recente meetings, notities
2. Toon **meeting transcript + AI summary** op timeline; actiepunt "zoek match op financiering samenwerking"
3. **Lijst/filter** op companies met tag "financiering samenwerking" + expertise vs. open vraag
4. **Workflow-demo**: event-aanmelding via website → bevestiging → herinnering → evaluatie na event
5. **Customer Success Score** dashboard: welke steden zijn actief, welke vragen staan open

### What to emphasize for this customer
- Jullie blijven de **matchmaker** — HubSpot ondersteunt, vervangt de menselijke rol niet
- **Eén plek** voor context uit gesprekken, e-mail, events en notities (nu versnipperd)
- **Eenvoud** voor 3 parttime medewerkers; geen enterprise-complexiteit
- **Thema-gedreven** communicatie en matchmaking (hun eigen taxonomie)
- **Vertrouwelijkheid** — permissions, interne notities, geen ledenportaal met zoekfunctie op elkaars vragen

### Risks to avoid in the demo
- Niet tonen als **sales pipeline** of lead scoring voor "verkoop"
- Geen belofte van **volledige City Connect-vervanging** in fase 1
- Geen **automatische matchmaking** zonder menselijke tussenstap — Ad zei expliciet: "wij zitten er altijd tussen"
- Niet **7 dure Front Office seats** pushen; focus op 3 uitvoerende users + workaround voor bestuursleden
- **Dynamics-vergelijking** niet neerzetten als "wij winnen altijd" — respecteer hun vergelijkingsproces
- **WhatsApp-workflows** en irrelevante B2B-sales features vermijden
- **Matchmaking als custom app** te zwaar maken — start met notes, tags, lists en AI search

---

## 4. Relevant integrations

| Integration | Link | Why relevant |
|---|---|---|
| Microsoft Teams | Native HubSpot-Teams integratie | Gesprekken opnemen, transcriptie in CRM (PvE §11; kern vraag Ad) |
| Microsoft Outlook | HubSpot inbox / email sync | E-mailhistorie per relatie (PvE §3, §8) |
| Website formulieren | HubSpot forms op binnenstadsmanagement.org | Event-aanmeldingen nu via website → direct in CRM |
| MailChimp → HubSpot Marketing Email | Migratiepad | Nieuwsbrief (~6–7x/jaar, 1500–2000 ontvangers) |
| Twinfield | Geen native demo | Facturatie blijft extern; export contactlijst voor administratie |
| City Connect / Chenos | Geen integratie fase 1 | Ad wil idealiter koppeling; Sam was eerlijk: niet in eerste implementatie |
| LinkedIn | Social / traffic source | Blijft voor brede event-promotie; niet vervangen |
| Binnenstadsbarometer | Externe tool | Buiten scope CRM; eventueel link in company-record |

### Notes
- Teams-integratie is **differentiator vs. Excel** — maar seat-kosten voor 7 bestuursleden zijn bottleneck; toon workaround (planner neemt op, transcript plakken) naast ideale situatie
- Website-formulier is **quick win** — Ad bevestigde: alle aanmeldingen gaan via website
- Geen integratie beloven die niet in implementatieplan staat (€4–6 weken, geen City Connect)

---

## 5. Workflow ideas

| Department | Workflow idea | Trigger / logic | Value |
|---|---|---|---|
| Marketing | Event-aanmelding bevestiging | Form submit op website → bedankmail + internal notification | Geen handmatig Excel meer voor deelnemerslijst |
| Marketing | Event-herinnering | 7 dagen en 1 dag voor event; filter op ingeschreven contacten | Janny noemde dit als wens |
| Marketing | Thematische event-uitnodiging | Nieuw event met deelsessie-tag → mail naar contacten met matching `thema-interesse` | Gepersonaliseerde uitnodiging die Ad spontaan noemde |
| Marketing | Nieuwsbrief segmentatie | Lid vs. partner vs. breed geïnteresseerd (niet-lid) | Vervangt MailChimp-segmenten |
| Service | Openstaande vraag reminder | Notitie/actiepunt met status "open" > 14 dagen → taak aan verantwoordelijke | "Vergeten reactie geven" voorkomen |
| Service | Customer Success Score alert | Score onder drempel → taak "proactief contact opnemen" | Engagement per lidmaatschap monitoren |
| Service | Post-meeting follow-up | Meeting logged → taak review actiepunten + update thema-tags | Structuur na bestuursgesprekken |
| Relatiebeheer | Nieuw contactpersoon notificatie | Contact property gewijzigd op company → taak "update facturatie-Excel" | Brug naar Twinfield-proces |
| Matchmaking | Gesprek getagd | Meeting summary bevat thema → suggest list "steden met zelfde vraag" (handmatige review) | Kern use case; start semi-automatisch |

### Notes
- Workflows moeten **licht** blijven — team heeft geen dedicated marketing automation beheerder
- **Re-enrollment** en edge cases (vertrouwelijke notities) in implementatieplan uitwerken, niet in demo
- Bestuursleden (~7 gesprekken/jaar per persoon): workflow voor **gedeelde meeting-inbox** of handmatige upload bespreken als kostenalternatief

---

## 6. Report ideas

> **Report**: 1–4 woorden label.
> **What it helps decide**: 12–20 woorden, jip-en-janneketaal, beslissingsgericht.
> **Why relevant**: consultant-prep, korte bron-citatie.

| Department | Report | What it helps decide | Why relevant |
|---|---|---|---|
| Marketing | Event-deelname per stad | Welke leden komen structureel niet naar bijeenkomsten en verdienen een belletje? | Ad vroeg CSS; PvE §10 |
| Marketing | Nieuwsbrief engagement | Welke thema's en doelgroepen pakken aan; moet segmentatie worden aangescherpt? | MailChimp-vervanging; PvE §6 |
| Marketing | Thema-interesse overzicht | Welke onderwerpen leven het meest bij leden; input voor programma-opbouw | Matchmaking + event-planning |
| Sales | Lidmaatschap renewals | Welke steden moeten dit jaar opnieuw factureren; wie is het facturatie-contact? | Jaarlijkse facturatiecyclus (Excel → CRM) |
| Sales | Partner vs. stad activiteit | Zijn partners even actief betrokken als steden in events en communicatie? | Twee lidmaatschapstypen PvE §4 |
| Sales | Pipeline open vragen | Hoeveel matchmaking-vragen staan open en bij welke thema's? | Operationeel overzicht uitvoerend team |
| Service | Openstaande actiepunten | Welke beloftes uit gesprekken zijn nog niet opgevolgd; wie is eigenaar? | Ad: vergeten reacties; PvE §8 |
| Service | Customer Success Score | Welke leden scoren laag op engagement en lopen risico op uitval? | Expliciet gevraagd in demo |
| Service | Meeting-frequentie | Hoeveel gesprekken per stad per jaar; is de matchmaking-intensiteit in balans? | Verschuiving naar 1-op-1 relaties |
| Growth | Netwerk groei | Hoeveel actieve leden en partners; groeit het netwerk jaar op jaar? | PvE §10 rapportages |
| Growth | Matchmaking succes | Hoeveel koppelingen tussen steden per kwartaal; welke thema's het meest? | Kernmissie platform |
| Growth | Event reach vs. leden | Bereikt het jaarprogramma de juiste mix van leden en externe geïnteresseerden? | LinkedIn/website + leden events |

### Dashboard doelen
- **Marketing:** In één oogopslag zien welke events en thema's het meeste engagement opleveren per lidtype.
- **Sales:** Overzicht van actieve lidmaatschappen, renewal-status en facturatie-contacten zonder Excel-chaos.
- **Service:** Geen openstaande vragen of actiepunten uit gesprekken meer missen; lage engagement tijdig signaleren.
- **Growth:** Meten of het platform zijn kernwaarde levert: matchmaking, kennisdeling en netwerkactiviteit per stad.

---

## 7. Validation questions

1. **Wie is de beslisser** naast Ad en Janny — moet het bestuur (7 personen) formeel akkoord geven vóór implementatie, en op basis van welke criteria kiezen ze tussen HubSpot en Dynamics?
2. **Matchmaking-taxonomie** — hebben jullie de thema's en sub-thema's (zoals "samenwerking → financiering") al gestructureerd, of moet die nog worden opgebouwd tijdens implementatie?
3. **City Connect** — wat is het minimale dat daar moet blijven draaien naast HubSpot, en welke contactgegevens zijn nu leidend (City Connect of Excel)?
4. **Vertrouwelijkheid** — op welk niveau moet vertrouwelijkheid worden vastgelegd (notitie, vraag, heel company-record) en wie mag wat zien binnen het team en bestuur?
5. **Licenties** — definitieve keuze: 3 Front Office seats voor uitvoerend team, of ook bestuursleden? Welke workaround is acceptabel voor gesprekken buiten die licenties?
6. **Twinfield / facturatie** — blijft 100% bij administratiekantoor, of willen jullie op termijn betaalstatus in CRM zien (PvE noemt dit als nice-to-have)?

### Why these questions matter
- Zonder **besluitvorming en criteria** riskeer je een demo die inhoudelijk landt maar commercieel stokt bij vergelijking met Dynamics.
- **Taxonomie** bepaalt of matchmaking out-of-the-box werkt of custom object/maatwerk nodig is (€3k–10k implementatiebandbreedte uit verkenning).
- **City Connect-scope** voorkomt verwachtingsmismatch over intranet-demo vs. fase-1 CRM.
- **Licentiemodel** is direct gekoppeld aan hun budgetplafond (€5k–7,5k/jaar).

---
