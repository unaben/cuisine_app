import { useEffect, useState } from "react";
import { ICuisine } from "../models/cuisine";
import { Params } from "react-router-dom";
import { apiURL } from "../config";

export const useSearchCuisine = (params: Params<string>) => {
  const [searchResult, setSearchResult] = useState<ICuisine[]>([]);

  const searchCuisine = async (searchTerm: string) => {
    try {
      const itemNumToFetch = "12";

      const data = await fetch(
        `${apiURL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&number=${itemNumToFetch}`
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
