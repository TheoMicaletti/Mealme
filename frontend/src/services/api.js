import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

/**
 * Renvoie une liste de recette contenant l'ingrédient donné
 *
 * @param {String} recipe L'ingrédient principal
 */
export const getRecipeByIngredient = async (recipe) => {
  return (await axios.get(`${API_URL}${recipe}`)).data.meals;
};
