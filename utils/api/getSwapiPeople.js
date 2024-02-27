import formatSwapiPeople from "../format/formatSwapiPeople";
import generateImage from "./generateImage";

export default async function getSwapiPeople(
  url = "https://swapi.dev/api/people",
  attempt = 1,
  people = []
) {
  return fetch(url, {
    headers: { Accept: "application/json" },
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
        return getSwapiPeople(json.next, 1, people);
      }

      return people;
    })
    .catch((err) => {
      console.error(`${url} errored at attempt ${attempt}: ${err}`);

      if (attempt < 2) {
        attempt += 1;
        return getSwapiPeople(url, attempt, people);
      }

      return false;
    });
}

export async function getFormattedSwapiPeopleWithImages() {
  const people = await getSwapiPeople();
  const formattedPeople = formatSwapiPeople(people);
  return Promise.all(
    formattedPeople.map((person) =>
      generateImage(person.name).then((image) => {
        return { ...person, image };
      })
    )
  );
}
