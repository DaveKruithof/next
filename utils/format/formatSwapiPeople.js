import snakeToLowerCamelCase from "./snakeToLowerCamelCase";

/**
 * Format swapi person objects into compact format
 *
 * @param {{object[]}} people
 * @returns {{name: string, hairColor: string[], url: string, starship: string}[]}
 */
export default function formatSwapiPeople(people) {
  if (!Array.isArray(people)) return [];

  return people
    .filter(
      (p) =>
        typeof p === "object" &&
        !Array.isArray(p) &&
        !isNaN(p.height) &&
        parseInt(p.height) >= 167 &&
        p.gender === "male" &&
        (p.hair_color?.includes("white") || p.hair_color?.includes("brown")) &&
        p.starships?.length >= 1
    )
    .map(({ name, hair_color, url, starships }) =>
      snakeToLowerCamelCase({
        name,
        hair_color: hair_color.split(", "),
        url,
        starship: starships[starships.length - 1],
      })
    );
}
