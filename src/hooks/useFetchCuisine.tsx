import { useEffect, useState } from "react";
import { ICuisine } from "../models/cuisine";
import { apiURL } from "../config";

export const useFetchCuisine = (type: string) => {
  const [cuisine, setCuisine] = useState<ICuisine[]>([]);

  const getCuisine = async () => {
    try {
      const numOfCuisineToFetch = "12";

      const data = await fetch(
        `${apiURL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}&number=${numOfCuisineToFetch}`
      );
      const recipes = await data.json();
      setCuisine(recipes.results);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {   
    getCuisine();
  }, [type]);

  return { cuisine };
};
