Maak een nieuwe repository aan met de naam van de klant. Zet alles op nee en gebruik customer-template als template.
Vul vervolgens deze mappen met alle beschikbare klantdata.

Open in cursor de rootlocatie (startmap waarin alle klanten zitten) op je computer en gebruik de volgende commando's om deze gegevens naar je computer te kopieren.

**Geschikt maken voor GIT** (Copernicus vervangen door naam repository)
git init
git add .
git commit -m "Copernicus"

**Klantrepo klonen (inclusief sub-repo's)**
Klik op de groene button "Code" om de locatie van de repository te vinden. Open de hoofdlocatie met klantmappen en voer uit:
git clone --recurse-submodules https://github.com/danabyte2/Copernicus.git

Heb je de repo al gekloond zonder `--recurse-submodules` (dus met lege `.cursor/skills` en `.cursor/ppt-deck-library`)? Open dan de klantmap en draai eenmalig:
git submodule update --init --recursive

**Toevoegen Shared Skills + PPT Deck Library (alleen bij een nieuwe klantrepo zonder template)**
Open de klantmap en voer dit PowerShell-commando in één keer uit. Het maakt `.cursor` aan, voegt beide sub-repo's toe, initialiseert ze en pusht de wijzigingen:

New-Item -ItemType Directory -Force .cursor | Out-Null; git submodule add https://github.com/danabyte2/shared-skills.git .cursor/skills; git submodule add https://github.com/danabyte2/ppt-deck-library.git .cursor/ppt-deck-library; git submodule update --init --recursive; git add .gitmodules .cursor/skills .cursor/ppt-deck-library; git commit -m "Add shared-skills and ppt-deck-library submodules"; git push origin main

**Buildstructuur (standaard in template)**
Deze template bevat standaard `Build/HubSpot CRM/` voor de HubSpot CRM build-flow.
Gebruik deze map als root voor de skill `hubspot-design-and-build`:
- reviews
- specs
- logs
- state.json

Voorbeeld CLI vanuit klantrepo-root:
node .cursor/skills/hubspot-design-and-build/tools/cli.js dry-run --root "Build/HubSpot CRM" --step 01
