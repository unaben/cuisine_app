import { useEffect, useState } from "react";
import { IApiData } from "../models/apiData";

export const useFetchVeggies = () => {
  const [veggie, setVeggie] = useState<IApiData[]>([]);

  const getVeggies = async () => {
    try {
      const check = localStorage.getItem("veggie");
      const numOfVeggiesToFetch = "12";

      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(
          `${process.env.REACT_APP_BASE_URL}/random?apiKey=${process.env.REACT_APP_API_KEY}
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
