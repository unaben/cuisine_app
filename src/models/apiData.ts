export interface IApiData {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: string;
  extendedIngredients: IExtendedIngredients[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: [];
  dishTypes: string[];
  diets: string[];
  occasions: [];
  instructions: string;
  analyzedInstructions: [];
  originalId: null;
  spoonacularSourceUrl: string;
}

interface IExtendedIngredients {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: [];
  measures: IMeasures;
}

interface IMeasures {
  us: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
  metric: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
}
