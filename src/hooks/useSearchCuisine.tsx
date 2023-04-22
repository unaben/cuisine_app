import { useEffect, useState } from "react";
import { ICuisine } from "../models/cuisine";
import { Params } from "react-router-dom";
import { apiURL } from "../config";

export const useSearchCuisine = (params: Params<string>) => {
  const [searchResult, setSearchResult] = useState<ICuisine[]>([]);
  const API_KEY = "7a206e94c48e4a7f9f9c5e857062e66c";

  const searchCuisine = async (searchTerm: string) => {
    try {
      const itemNumToFetch = "12";

      const data = await fetch(
        `${apiURL}/complexSearch?apiKey=${API_KEY}
        &query=${searchTerm}&number=${itemNumToFetch}`
      );
      const recipes = await data.json();
      setSearchResult(recipes.results);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {
    searchCuisine(params.search as string);
  }, [params.search]);

  return { searchResult };
};
