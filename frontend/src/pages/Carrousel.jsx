import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import uuid from "react-uuid";

import { getRecipesByIngredients } from "@services/api.js";
import Loader from "@components/Loader";

import noRecipeFoundBlack from "@assets/noRecipeFound_black.png";

export default function Carrousel() {
  // Hook permettant de récupérer les paramètre de la query string (?string1=ingrédient1&string2=ingrédient2...)
  const [queryString] = useSearchParams();

  const [mealRecipes, setMealRecipes] = useState([]);
  const [firstRecipe, setFirstRecipe] = useState();
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);

  useEffect(() => {
    (async function getRecipe() {
      setIsRecipesLoading(true);

      // On récupère les ingredients s'ils sont présent dans la queryString,
      // Sinon on choisi un tableau vide  par défaut.
      const ingredients = queryString.get("ingredients")
        ? queryString.get("ingredients").split(",")
        : [];

      const [firstRecipeData, ...recipes] = await getRecipesByIngredients(
        ingredients
      );

      setMealRecipes(recipes);
      setFirstRecipe(firstRecipeData);
      setIsRecipesLoading(false);
    })();
  }, []);

  if (isRecipesLoading) {
    return <Loader />;
  }

  if (mealRecipes.length === 0) {
    return (
      <div className="max-w-xs mx-auto">
        <img src={noRecipeFoundBlack} alt="No recipes found" className="" />
        <h3 className="text-center text-mada text-4xl dark:text-white mb-36">
          No <span className="text-gradient text-atma font-bold">Recipes</span>{" "}
          Found !
        </h3>
        <button
          className="px-4 py-2 text-2xl border-2 rounded-3xl dark:text-white text-mada flex mx-auto pointer-events-auto shadow-md shadow-gray-400"
          type="button"
        >
          Go back to the{" "}
          <span className="text-gradient text-atma px-2 font-bold">
            kitchen
          </span>{" "}
          !
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-[75%] min-h-screen my-24">
      <h1 className="mt-4 mb-6 lg:text-5xl text-4xl md:text-3xl dark:text-white text-center text-mada">
        Choose your{" "}
        <span className="text-gradient text-atma font-bold">meal!</span>
      </h1>
      <div className="mx-auto my-auto w-full h-full max-w-sm max-h-sm">
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
          data-carousel="static"
        >
          <div className="carousel-inner relative w-full overflow-hidden rounded-[80px]">
            <div className="carousel-item active relative float-left w-full p-5 duration-700 ease-in-out hover:scale-105">
              <img
                src={firstRecipe.recipe.image}
                className="block w-full p-2 mb-6 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[80px] shadow-lg shadow-gray-400"
                alt={firstRecipe.recipe.label}
              />
              <div className="flex flex-col p-6 rounded-lg max-w-sm w-full mx-auto">
                <h3 className="dark:text-white mb-4 md:text-4xl text-xl text-center text-mada">
                  {firstRecipe.recipe.label}
                </h3>
                <p className="capitalize dark:text-white font-bold mb-2 md:text-2xl text-lg text-center w-full text-atma text-gradient">
                  {firstRecipe.recipe.cuisineType}
                </p>
              </div>
            </div>
            {mealRecipes.slice(0, 4).map((item) => (
              <div
                key={uuid()}
                className="carousel-item relative float-left w-full p-5 duration-700 ease-in-out hover:scale-105"
              >
                <img
                  src={item.recipe.image}
                  className="block w-full p-2 mb-2 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[80px] shadow-lg shadow-gray-400"
                  alt={item.recipe.label}
                />
                <div className="flex flex-col p-6 rounded-lg max-w-sm w-full mx-auto">
                  <h3 className="dark:text-white mb-4 md:text-4xl text-xl text-center text-mada">
                    {item.recipe.label}
                  </h3>
                  <p className="capitalize dark:text-white font-bold mb-2 md:text-2xl text-lg text-center w-full text-atma text-gradient">
                    {item.recipe.cuisineType}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev absolute lg:top-60 top-48 md:-left-1/4 -left-9 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="inline-block bg-no-repeat" aria-hidden="true">
              <i className="fa-solid fa-circle-chevron-left text-[#78B07C] dark:text-[#ffdb20] text-4xl xl:text-5xl hover:scale-110">
                {" "}
              </i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute lg:top-60 top-48 md:-right-1/4 -right-9 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="inline-block bg-no-repeat" aria-hidden="true">
              <i className="fa-solid fa-circle-chevron-right text-[#78B07C] dark:text-[#ffdb20] text-4xl xl:text-5xl hover:scale-110">
                {" "}
              </i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
