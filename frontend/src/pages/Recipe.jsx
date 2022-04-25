import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import uuid from "react-uuid";

import Loader from "@components/Loader";

import { getRecipeById } from "@services/api.js";

export default function Recipes() {
  const [queryString] = useSearchParams();

  const [recipe, setRecipe] = useState({});
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);

  useEffect(() => {
    (async function getRecipe() {
      setIsRecipesLoading(true);

      const id = queryString.get("id");
      const recipeId = await getRecipeById(id);

      setRecipe(recipeId);

      setIsRecipesLoading(false);
    })();
  }, []);

  if (isRecipesLoading) {
    return <Loader />;
  }

  return (
    <div className="text-center flex flex-col">
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt="" style={{ height: 300, width: 300 }} />
      <h3>{recipe.cuisineType}</h3>
      <h3>{recipe.mealType}</h3>
      <div>
        <h3>Preparation Time</h3>
        <p>{recipe.totalTime} Mins</p>
      </div>
      <p>Serves {recipe.yield}</p>
      <div>
        <h3>Ingredient List :</h3>
        <ul>
          {recipe.ingredientLines.map((ingredient) => (
            <li key={uuid()}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
