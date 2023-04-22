import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";
import { Params } from "react-router-dom";

export const useFetchRecipes = (params: Params<string>) => {
  const [recipeDetails, setRecipeDetails] = useState<IApiData | undefined>();

  const fetchRecipeDetails = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
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
  }, [params.name]);

  return { recipeDetails };
};
