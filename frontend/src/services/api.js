import axios from "axios";

const API_URL_BASE = "https://api.edamam.com/api/recipes/v2";
const API_URL_TYPE = "?type=public&q=";
const API_URL_REST =
  "&app_id=f54115c7&app_key=%2000411eb72862c3288b20971f6e471623";

export const getRecipesByIngredients = async (ingredients = [], diet = []) => {
  const newRecipes = await axios.get(
    `${API_URL_BASE}${API_URL_TYPE}${ingredients.join("%20")}${API_URL_REST}${
      diet.length > 0 ? `&health=${diet.join("&health=")}` : " "
    }`
  );
  return newRecipes.data.hits ?? [];
};

export const getRecipeById = async (id) => {
  const newRecipe = await axios.get(
    `${API_URL_BASE}/${id}${API_URL_TYPE}${API_URL_REST}`
  );

  return newRecipe.data.recipe ?? {};
};

// Appel ingredients database
const DB_URL = "http://localhost:5000";

export const getIngredientsList = async () => {
  return (await axios.get(`${DB_URL}/ingredients`)).data;
};

export const login = async (user) => {
  return (await axios.post(`${DB_URL}/users`, { user })).data;
};
