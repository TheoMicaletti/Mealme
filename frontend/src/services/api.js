import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const API_URL_BASE = "https://api.edamam.com/api/recipes/v2";
const API_URL_TYPE = "?type=public&q=";
const API_URL_REST =
  "&app_id=f54115c7&app_key=%2000411eb72862c3288b20971f6e471623";

export const getRecipesByIngredients = async (ingredients = []) => {
  const newRecipes = await axios.get(
    `${API_URL_BASE}${API_URL_TYPE}${ingredients[0]}%20${ingredients[1]}%20${ingredients[2]}${API_URL_REST}`
  );

  return newRecipes.data.hits ?? [];
};

export const getRecipeById = async (id) => {
  const newRecipe = await axios.get(
    `${API_URL_BASE}/${id}${API_URL_TYPE}${API_URL_REST}`
  );

  return newRecipe.data.recipe ?? {};
};

export const getIngredientsList = async () => {
  return (await axios.get(`${API_URL}list.php?i=list`)).data.meals;
};
