import { useEffect, useState } from "react";
import { ICuisine } from "../models/cuisine";
import { Params } from "react-router-dom";

export const useFetchCuisine = (params: Params<string>) => {
  const [cuisine, setCuisine] = useState<ICuisine[]>([]);

  const getCuisine = async (type: string) => {
    try {
      const numOfCuisineToFetch = "12";

      const data = await fetch(
        `${process.env.REACT_APP_BASE_URL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}
        &cuisine=${type}&number=${numOfCuisineToFetch}`
      );
      const recipes = await data.json();
      setCuisine(recipes.results);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {
    getCuisine(params.type as string);
  }, [params.type]);

  return { cuisine };
};
