import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";
import { apiURL } from "../config";

export const useFetchVeggies = () => {
  const [veggie, setVeggie] = useState<IApiData[]>([]);
  const API_KEY = "7a206e94c48e4a7f9f9c5e857062e66c";

  const getVeggies = async () => {
    try {
      const check = localStorage.getItem("veggie");
      const numOfVeggiesToFetch = "12";

      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(
          `${apiURL}/random?apiKey=${API_KEY}
          &number=${numOfVeggiesToFetch}&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  useEffect(() => {
    getVeggies();
  }, []);

  return { veggie };
};
