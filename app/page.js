import GeneratedImage, {
  GeneratedImageFallback,
} from "@/components/GeneratedImage";
import { getFormattedSwapiPeopleWithImages } from "@/utils/api/getSwapiPeople";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const people = await getFormattedSwapiPeopleWithImages();

  return (
    <main className="max-w-7xl mx-auto">
      <h1>Matches:</h1>
      {Array.isArray(people) && !!people && (
        <div className="grid grid-cols-3 gap-4">
          {people.map((person, key) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-95 transition-all"
              key={person.name}
            >
              <Link
                href={person.url}
                target="_blank"
                className="flex aspect-square w-full items-center justify-center"
              >
                <Suspense
                  fallback={<GeneratedImageFallback prompt={person.name} />}
                >
                  <GeneratedImage prompt={person.name} />
                </Suspense>
              </Link>
              <div className="p-5">
                <h2>{person.name}</h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                  Hair color(s): {person.hairColor.join(", ")} &{" "}
                  <Link href={person.starship} target="_blank">
                    {person.name}'s starship
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
