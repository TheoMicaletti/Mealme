import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

/**
 * Renvoie une liste de recette contenant l'ingrédient donné
 *
 * @param {String} recipe L'ingrédient principal
 */
export const getRecipeByIngredient = async (recipe) => {
  return (await axios.get(`${API_URL}search.php?s=${recipe}`)).data.meals;
};

export const getIngredientsList = async () => {
  return (await axios.get(`${API_URL}list.php?i=list`)).data.meals;
};
