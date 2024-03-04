import formatSwapiPeople from "../format/formatSwapiPeople";

/**
 * Get all people from the swapi api
 *
 * @returns {Object[]}
 */
export default async function getSwapiPeople() {
  return getAllSwapiPeoplePages();
}

/**
 * Get all people pages from the swapi api
 *
 * @param {string} url
 * @param {number} attempt
 * @param {[]} people
 * @returns {Object[]}
 */
async function getAllSwapiPeoplePages(
  url = "https://swapi.dev/api/people",
  attempt = 1,
  people = []
) {
  return fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 }, // becomes stale after 1h
  })
    .then((req) => req.json())
    .then((json) => {
      if (typeof json !== "object")
        throw new Error(`unexpected swapi format: ${json}`);

      if (Array.isArray(json.results)) {
        people = people.concat(json.results);
      }

      // if there are more pages to fetch start recursive chain
      if (typeof json.next === "string") {
        return getAllSwapiPeoplePages(json.next, 1, people);
      }

      return people;
    })
    .catch((err) => {
      console.error(`${url} errored at attempt ${attempt}: ${err}`);

      if (attempt < 2) {
        attempt += 1;
        return getAllSwapiPeoplePages(url, attempt, people);
      }

      return [];
    });
}

/**
 * @returns {{name: string, hairColor: string[], url: string, starship: string}[]}
 */
export async function getFormattedSwapiPeopleWithImages() {
  const people = await getSwapiPeople();
  return formatSwapiPeople(people);
}
