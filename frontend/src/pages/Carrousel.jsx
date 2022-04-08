import React from "react";
import mealRecipes from "@assets/dataMeal";

export default function Carrousel() {
  const [firstRecipe, ...otherRecipe] = mealRecipes;

  return (
    <>
      <h1 className="mt-8 mb-4 mt-24 lg:text-6xl md:text-4xl sm:text-2xl dark:text-white text-center text-mada">
        Choose your{" "}
        <span className="text-gradient text-atma font-bold">meal!</span>
      </h1>
      <div className="mx-auto mt-14 lg:w-2/6 lg:h-2/6 w-3/5 h-3/5">
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden rounded-[95px]">
            <div className="carousel-item active relative float-left w-full ">
              <img
                src={firstRecipe.strMealThumb}
                className="block w-full p-2 mb-2 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[100px]"
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
            {otherRecipe.map((item) => (
              <div
                key={item.idMeal}
                className="carousel-item relative float-left w-full"
              >
                <img
                  src={item.strMealThumb}
                  className="block w-full p-2 mb-2 bg-gradient-to-br from-[#78B07C] to-[#ffdb20] rounded-[100px]"
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
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            >
              {" "}
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            >
              {" "}
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
