import React, { useState, useEffect } from "react";

import { getRecipeByIngredient } from "@services/api.js";

export default function Carrousel() {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [firstRecipe, setFirstRecipe] = useState();
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);

  useEffect(() => {
    (async function getRecipe() {
      setIsRecipesLoading(true);
      const [firstRecipeData, ...recipes] = await getRecipeByIngredient("beef");
      setMealRecipes(recipes);
      setFirstRecipe(firstRecipeData);
      setIsRecipesLoading(false);
    })();
  }, []);

  if (isRecipesLoading) {
    return <p>Chargement des recettes ...</p>;
  }

  return (
    <div className="m-auto w-[80%]">
      <h1 className="mt-4 mb-6 lg:text-5xl text-4xl md:text-3xl dark:text-white text-center text-mada">
        Choose your{" "}
        <span className="text-gradient text-atma font-bold">meal!</span>
      </h1>
      <div className="mx-auto my-auto lg:w-1/3 lg:h-1/3 md:w-1/2 md:h-1/2 w-2/3 h-2/3">
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
            className="carousel-control-prev absolute top-0 bottom-20 -left-1/4 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
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
            className="carousel-control-next absolute top-0 bottom-20 -right-1/4 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
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
