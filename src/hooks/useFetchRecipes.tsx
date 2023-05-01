import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";
import { apiURL } from "../config";

export const useFetchRecipes = (name: string) => {
  const [recipeDetails, setRecipeDetails] = useState<IApiData | undefined>();

  const fetchRecipeDetails = async () => {
    try {
      const data = await fetch(
        `${apiURL}/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();

      setRecipeDetails(detailData);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return { recipeDetails };
};
