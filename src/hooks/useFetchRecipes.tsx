import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";
import { Params } from "react-router-dom";
import { apiURL } from "../config";

export const useFetchRecipes = (params: Params<string>) => {
  const [recipeDetails, setRecipeDetails] = useState<IApiData | undefined>();
  const API_KEY = "7a206e94c48e4a7f9f9c5e857062e66c";

  const fetchRecipeDetails = async () => {
    try {
      const data = await fetch(
        `${apiURL}/${params.name}/information?apiKey=${API_KEY}`
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
