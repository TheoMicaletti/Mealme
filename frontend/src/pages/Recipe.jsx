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
    <div className="flex flex-col w-3/5 m-auto">
      <img
        src={recipe.image}
        alt=""
        style={{ height: 300, width: 300 }}
        className="mx-auto mb-12 p-2 rounded-[80px] bg-gradient-to-br from-[#78B07C] to-[#ffdb20] shadow-lg shadow-gray-400"
      />
      <h1 className="mb-6 text-center text-3xl dark:text-white text-mada font-bold">
        {recipe.label}
      </h1>
      <div className="flex flex-row mb-4 mx-auto text-2xl text-[#78B07C] dark:text-[#ffdb20]">
        <h3 className="text-center px-4 capitalize decoration-solid underline decoration-2 decoration-[#8ddc93] dark:decoration-[#ffdb20] text-atma font-bold">
          {recipe.cuisineType}
        </h3>
        <h3 className="text-center px-4 capitalize decoration-solid underline decoration-2 decoration-[#8ddc93] dark:decoration-[#ffdb20] text-atma  font-bold">
          {recipe.mealType}
        </h3>
      </div>
      <div className="flex flex-row mx-auto mb-6">
        <div className="flex flex-col text-center px-4 mx-4">
          <i className="fa-solid fa-clock text-3xl text-gradient" />
          <p className="dark:text-white text-lg text-mada">
            {recipe.totalTime} Mins
          </p>
        </div>
        <div className="flex flex-col text-center px-4 mx-6">
          <i className="fa-solid fa-utensils text-3xl text-gradient" />
          <p className="dark:text-white text-lg text-mada">
            Serves {recipe.yield}
          </p>
        </div>
      </div>
      <div className="text-center text-mada dark:text-white mb-36">
        <h3 className="text-2xl px-4 decoration-solid underline decoration-2 decoration-black dark:decoration-white font-bold">
          Ingredient List :
        </h3>
        <ul>
          {recipe.ingredientLines.map((ingredient) => (
            <li key={uuid()} className="text-lg capitalize">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
