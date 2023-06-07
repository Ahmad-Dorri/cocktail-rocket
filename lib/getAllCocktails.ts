export default async function getAllCocktails(
  searchTerm: string
): Promise<Result[] | undefined> {
  const url = `https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${searchTerm}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '00b01d2651msh39ff22faf7d5421p14338ajsn8a707fd159fa',
      'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result: Result[] = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
