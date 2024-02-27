import { getFormattedSwapiPeopleWithImages } from "@/utils/api/getSwapiPeople";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const people = await getFormattedSwapiPeopleWithImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Matches:</h1>
      {Array.isArray(people) && !!people && (
        <div className="flex flex-col items-center -space-y-4">
          {people.map((person, key) => (
            <Link
              href={person.url}
              key={key}
              className="relative inline-block h-96 w-96 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10 overflow-hidden group"
            >
              <Image
                src={person.image}
                width="1024"
                height="1024"
                alt={person.name}
              />
              <div className="absolute z-20 text-center inset-0 my-auto items-center hidden group-focus:flex group-hover:flex group-focus:bg-black/10 group-hover:bg-black/10">
                <div className="mx-auto text-white">
                  <h2 className="">{person.name}</h2>
                  <p>Hair colors: {person.hairColor.join(", ")}</p>
                  <p>Starship: {person.starship}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
