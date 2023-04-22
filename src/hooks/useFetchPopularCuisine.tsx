import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";
import { apiURL } from "../config";

export const useFetchPopularCuisine = () => {
  const [popularCusinie, setPopularCusinie] = useState<IApiData[]>([]);
  const numOfpopularCusinieToFetch = "9";

  const getPopularCusinie = async () => {
    try {
      const check = localStorage.getItem("popular");
      if (check) {
        setPopularCusinie(JSON.parse(check));
      } else {
        const api = await fetch(
          `${apiURL}/random?apiKey=${process.env.REACT_APP_API_KEY}
          &number=${numOfpopularCusinieToFetch}`
        );
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopularCusinie(data.recipes);
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {
    getPopularCusinie();
  }, []);

  return { popularCusinie };
};
