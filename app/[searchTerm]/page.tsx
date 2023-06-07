import getAllCocktails from '@/lib/getAllCocktails';
import Link from 'next/link';
import React from 'react';

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const cocktailsData = getAllCocktails(searchTerm);
  const cocktails = await cocktailsData;
  return (
    <ul className="menu">
      {cocktails?.map((cocktail) => (
        <li key={cocktail.name} className="text-white text-[24px]">
          <Link className="p-4" href={`cocktails/${cocktail.name}`}>
            {cocktail.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
