import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getRecipesByIngredients } from "@services/api.js";

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
    return <p>Chargement des recettes ...</p>;
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
      <div className="mx-auto my-auto w-3/5 h-3/5 lg:w-2/5 lg:h-2/5">
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
          data-carousel="static"
        >
          <div className="carousel-inner relative w-full overflow-hidden rounded-[95px]">
            <div className="carousel-item active relative float-left w-full p-5 duration-700 ease-in-out hover:scale-105">
              <img
                src={firstRecipe.strMealThumb}
                className="block w-full p-2 mb-2 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[100px] shadow-lg shadow-gray-400"
                alt={firstRecipe.strMeal}
              />
              <div className="flex justify-center">
                <div className="flex p-6 rounded-lg max-w-sm w-full text-center">
                  <h3 className=" dark:text-white leading-tight font-medium mb-2 lg:text-2xl md:text-lg text-base text-center w-full text-mada">
                    {firstRecipe.strMeal}
                  </h3>
                </div>
              </div>
            </div>
            {mealRecipes.map((item) => (
              <div
                key={item.idMeal}
                className="carousel-item relative float-left w-full p-5 duration-700 ease-in-out hover:scale-105"
              >
                <img
                  src={item.strMealThumb}
                  className="block w-full p-2 mb-2 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[100px] shadow-lg shadow-gray-400"
                  alt={item.strMeal}
                />
                <div className="flex justify-center">
                  <div className="flex p-6 rounded-lg max-w-sm">
                    <h3 className="dark:text-white leading-tight font-medium mb-2 lg:text-2xl md:text-lg text-base text-center w-full text-mada">
                      {item.strMeal}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-20 md:-left-1/4 -left-9 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="inline-block bg-no-repeat" aria-hidden="true">
              <i className="fa-solid fa-circle-chevron-left text-[#78B07C] dark:text-[#ffdb20] text-4xl hover:scale-110">
                {" "}
              </i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-20 md:-right-1/4 -right-9 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="inline-block bg-no-repeat" aria-hidden="true">
              <i className="fa-solid fa-circle-chevron-right text-[#78B07C] dark:text-[#ffdb20] text-4xl hover:scale-110">
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
