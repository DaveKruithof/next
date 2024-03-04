import objectPropertiesToCamelCase from "./objectPropertiesToCamelCase";

/**
 * Format swapi person objects into compact format
 *
 * @param {{height: number, gender: string, hair_color: string, starships: string[], name: string, url: string}[]} people - swapi people objects
 * @returns {{name: string, hairColor: string[], url: string, starship: string}[]}
 */
export default function formatSwapiPeople(people) {
  if (!Array.isArray(people)) return [];

  return people
    .filter(
      (p) =>
        parseInt(p.height ?? 0) >= 167 &&
        p.gender === "male" &&
        (p.hair_color ?? "")
          .split(", ")
          .some((value) => value === "white" || value === "brown") &&
        Boolean(p.starships?.length)
    )
    .map(({ name, hair_color, url, starships }) =>
      objectPropertiesToCamelCase({
        name,
        hair_color: hair_color.split(", "),
        url,
        starship: starships[starships.length - 1],
      })
    );
}
