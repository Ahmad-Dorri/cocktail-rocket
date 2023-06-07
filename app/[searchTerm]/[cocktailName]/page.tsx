import getAllCocktails from '@/lib/getAllCocktails';
import React from 'react';

type Props = {
  params: {
    cocktailName: string;
  };
};

export default async function ResultPage({ params: { cocktailName } }: Props) {
  const cocktailsData = getAllCocktails(cocktailName);
  const cocktails = await cocktailsData;
  return (
    <>
      {cocktails?.map((cocktail) => (
        <div
          className="card gap-16 text-white h-auto mt-20 w-96 mx-auto text-center bg-green-700 p-8"
          key={cocktail.name}>
          <h1 className="text-[32px] font-bold  uppercase ">{cocktail.name}</h1>
          <ul className="menu">
            {cocktail.ingredients.map((ingredinet) => (
              <li key={ingredinet}>{ingredinet}</li>
            ))}
          </ul>
          <p>{cocktail.instructions}</p>
        </div>
      ))}
    </>
  );
}
