# Memory Game 🦉

Et enkelt memory-spill laget med React. Snu kortene og finn alle parene, med så få trekk og så kort tid som mulig.

## Spill her

[Spill Memory Game på GitHub Pages](https://siannon91.github.io/memory-light/)

## Funksjoner

- Kortstokken stokkes tilfeldig for hver runde
- Klikk på et kort for å snu det, med en flip-animasjon
- To like kort blir værende åpne, ellers snus de tilbake
- Teller for antall trekk og timer i sekunder (starter ved første klikk)
- Vinnermelding når alle parene er funnet
- «Nytt spill»-knapp som stokker kortene på nytt og nullstiller alt
- Fungerer også på mobil

## Teknologi

- React (`useState` og `useEffect`)
- Vite
- CSS (Grid og animasjoner)
- GitHub Pages for publisering

## Hvordan det fungerer

### State med `useState`

Spillet husker disse tingene:

- `cards`: de 16 kortene i stokket rekkefølge
- `flipped`: id-ene til kortene som er snudd akkurat nå (maks to)
- `matched`: id-ene til kortene som er funnet
- `moves`: antall trekk
- `seconds` og `started`: hvor mange sekunder som har gått, og om spillet har startet

Vinnermeldingen trenger ingen egen state: spillet er vunnet når antall funnede kort er like mange som alle kortene.

### Hva skjer når man klikker på et kort

1. Spillet sjekker om klikket teller. Det teller ikke hvis to kort allerede er snudd, eller hvis kortet allerede er snudd eller funnet.
2. Kortet legges til i `flipped`, og timeren starter ved første klikk.

### Effekter med `useEffect`

- **Kortsjekk:** når `flipped` inneholder to kort, øker spillet `moves` og sammenligner kortene. Er de like, legges de til i `matched`. Er de ulike, venter spillet ett sekund og snur dem tilbake.
- **Timer:** mens spillet pågår, teller et `setInterval` opp `seconds` hvert sekund. Timeren stopper når alle parene er funnet, og ryddes opp med `clearInterval`.

«Nytt spill»-knappen setter alle statene tilbake til startverdiene og stokker kortene på nytt.

## Kjøre prosjektet lokalt

```bash
npm install
npm run dev
```

Åpne deretter adressen som vises i terminalen. Den slutter på `/memory-light/`.

Publisering til GitHub Pages gjøres med `npm run deploy`.