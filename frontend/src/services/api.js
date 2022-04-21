import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

/**
 * Renvoie une recette contenant L'ingrédient demandé
 *
 * @param {String} recipe L'ingrédient principal
 */
export const getRecipeByIngredient = async (ingredient) => {
  const recipes = (await axios.get(`${API_URL}search.php?s=${ingredient}`)).data
    .meals;

  return recipes ?? [];
};

/**
 * Renvoie une liste de recette contenant LES ingrédients demandés
 *
 * @param {Array} recipe Les ingrédient principaux
 */
export const getRecipesByIngredients = async (ingredients = []) => {
  // On utilise un objet Map pour éviter les doublons de recette
  const recipeMap = new Map();

  if (ingredients.length) {
    for (const ingredient of ingredients) {
      const response = await getRecipeByIngredient(ingredient);
      // On boucle avec une KEY et une VALUE
      for (const recipe of response) {
        recipeMap.set(recipe.idMeal, recipe);
      }
    }
  }

  // On renvoi les valeurs de l'objet map...
  return recipeMap.values();
};

export const getIngredientsList = async () => {
  return (await axios.get(`${API_URL}list.php?i=list`)).data.meals;
};
