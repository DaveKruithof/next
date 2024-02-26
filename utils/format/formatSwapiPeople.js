/**
 * Format swapi person objects into compact format
 *
 * @param {{object[]}} people
 * @returns {{name: string, hair_color: [string], url: string, starship: string|null}[]}
 */
export default function formatSwapiPeople(people) {
  if (typeof people !== "object" || !Array.isArray(people)) return false;

  return people
    .filter((person) => {
      if (typeof person !== "object" || Array.isArray(person)) return false;
      if (
        !person.height ||
        !person.gender ||
        !person.hair_color ||
        !person.starships
      )
        return false;

      return (
        parseInt(person.height) >= 167 &&
        person.gender === "male" &&
        (person.hair_color === "white" || person.hair_color === "brown") &&
        person.starships.length >= 1
      );
    })
    .map((person) => {
      return {
        name: person.name,
        hair_color: [person.hair_color],
        url: person.url,
        starship:
          person.starships.length > 0
            ? person.starships[person.starships.length - 1]
            : null,
      };
    });
}
