## Instructions

1. Maak een nieuw (JavaScript) NextJS project aan. Gebruik de nieuwste versie van NextJS en zorg dat je de app router gebruikt.

2. Koppel het nieuwe project aan github of gitlab en zorg dat deze publiek toegankelijk is

3. Gebruik de open Star Wars API (https://swapi.dev/) om alle personages (people) op te halen

4. Maak een functie die de data op de volgende manieren transformeert (hoe en in welke volgorde je dat doet mag je zelf bepalen, als de uitkomst maar hetzelfde is) en gebruik JSDoc om de input en output van de functie te documenteren

5. Transformeer alle data zodat je een array overhoudt met enkel items die aan de volgende eisen voldoen:

   - Groter dan of gelijk aan 167cm

   - Man

   - Bruin of wit haar

   - Minimaal 1 starship

6. Transformeer de data zodat je vier properties overhoudt per item: name, hair_color, url en starship, waarbij starship het laatste item in de starships array bevat (dus geen array, maar een string gelijk aan het laatste item uit de starships array)

7. Transformeer de data zo zodat hair_color een array met haarkleuren is

8. Schrijf zelf een functie die object properties van snake_case naar camelCase omzet (zodat hair_color dus hairColor wordt) en schrijf hier unit tests voor.

9. Gebruik de nieuwe functie om jouw data te transformeren en alle item properties van snake_case naar camelCase te veranderen

10. Voeg voor elk item een afbeelding toe in het project of gebruik een (zelf te kiezen) API om afbeeldingen voor elk item op te halen (het hoeft niet daadwerkelijk te matchen met het Star Wars karakter) Beslis zelf of je deze afbeelding pas ophaalt in het React Component of dat je deze al toevoegt in de array met data zelf

11. Toon elk item in de getransformeerde data op een pagina, bijvoorbeeld in een grid (met een beetje CSS en JSX naar keuze, gebruik van Component en CSS libraries als shadcn en tailwind toegestaan)

Je mag zelf bepalen hoe fancy je dit maakt, maar gebruik in ieder geval de name property en de afbeelding die je aan het item toegevoegd hebt, plus een link naar de url property.

Vergeet niet om de juiste NextJS componenten te gebruiken waar dat nodig is

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
