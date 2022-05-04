import { useState } from "react";
import { Link } from "react-router-dom";
import IngredientsAutocomplete from "@components/IngredientsAutocomplete";

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const dietLabels = [
    { id: 1, name: "vegan" },
    { id: 2, name: "pork-free" },
    { id: 3, name: "gluten-free" },
  ];

  const [hasDiet, setHasDiet] = useState([]);

  const handleLabelChange = (e) => {
    if (hasDiet.includes(e.target.value)) {
      setHasDiet(hasDiet.filter((diet) => diet !== e.target.value));
    } else {
      setHasDiet([...hasDiet, e.target.value]);
    }
  };

  const buildDietQuery = () => {
    return hasDiet.map((diet) => `${diet}`).join("%20");
  };

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      bottom: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="with-bg h-full bg-bgwhite dark:bg-bgdark">
      <h1 className="pt-32 z-10 text-6xl text-4xl dark:text-white text-center text-gray-800 text-mada">
        Let&apos;s{" "}
        <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold">
          cook!
        </span>
      </h1>
      <div className="mb-12 my-20 pb-12 max-w-lg w-[90%] mr-auto ml-auto rounded-3xl border-4 dark:border-[#ffdb20] border-[#8ddc93] bg-zinc-50 dark:bg-gray-700 drop-shadow-lg">
        <IngredientsAutocomplete
          onSelect={setSelectedIngredients}
          onClick={setSelectedIngredients}
        />
        <div className="flex flex-col justify-center">
          <div className="flex flex-row mx-auto mt-8">
            {dietLabels.map((label) => (
              <div key={label.id} className="flex my-2 mx-4 justify-start">
                <input
                  className="form-check-input appearance-none h-6 w-6 mx-2 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  value={label.name}
                  id="diet-checkbox"
                  onChange={handleLabelChange}
                />
                <label
                  className="form-check-label text-black capitalize text-mada dark:text-white"
                  htmlFor="diet-checkbox"
                >
                  {label.name}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to={`/carrousel?ingredients=${selectedIngredients
                .map((ingredient) => ingredient.name)
                .join("%20")}${
                hasDiet.length > 0 ? `&health=${buildDietQuery()}` : ""
              }`}
            >
              <button
                type="button"
                disabled={selectedIngredients.length === 0}
                className="w-50 z-10 mb-4 border-2 border-white dark:border-gray-800 dark:text-zinc-800 text-center bg-[#8ddc93] dark:bg-[#ffdb20] hover:bg-green-600 dark:hover:bg-yellow-500 text-3xl text-white p-1.5 rounded-3xl text-mada disabled:bg-gray-300 dark:disabled:bg-gray-300 drop-shadow"
              >
                Let&apos;s{" "}
                <span className="text-white text-atma dark:text-zinc-800 font-bold pointer-events-none">
                  eat!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-atma mb-8 dark:text-white text-gray-800 text-xl">
        <p className="font-bold">Want to know more?</p>
        <p className="text-mada text-sm">Click on the carrot!</p>
      </div>
      <div className="mb-[350px] mx-auto mb-50">
        <button
          className="arrow bounce text-atma font-bold text-6xl dark:text-white"
          type="button"
          onClick={handleScroll}
        >
          🥕
        </button>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto text-mada mb-24 dark:text-white text-gray-800">
        <h1 className="text-atma mb-12 font-bold text-3xl">What is Mealme?</h1>
        <ul className="text-center text-xl">
          <p>
            Mealme is an application created by a group of{" "}
            <span className="font-bold">4 web-development students</span>. It
            allows you to{" "}
            <span className="font-bold">
              find recipes from a list of ingredients
            </span>{" "}
            defined by the user. For this to work, Mealme{" "}
            <span className="font-bold">
              uses an API and different databases
            </span>
            .
          </p>
        </ul>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto text-mada mb-24 dark:text-white text-gray-800">
        <h1 className="text-atma mb-12 font-bold text-3xl">
          How does it work?
        </h1>
        <ul className="flex justify-around md:flex-row flex-col text-center text-xl">
          <li className="md:mx-8 my-4">
            <p className="text-3xl my-2">👀 😋 ❄️</p>
            <p>
              Open <span className="font-bold"> your fridge</span> for
              ingredients...
            </p>
            <h2 className="mt-2 text-atma font-bold text-2xl bg-[#8ddc93] dark:bg-[#ffdb20] rounded-full w-8 m-auto text-gray-800">
              1
            </h2>
          </li>
          <li className="md:mx-8 my-4">
            <p className="text-3xl my-2">🥕 🍗 🧅</p>
            <p>
              <span className="font-bold">Add ingredients</span> you have in our
              search-bar
            </p>
            <h2 className="mt-2 text-atma font-bold text-2xl bg-[#8ddc93] dark:bg-[#ffdb20] rounded-full w-8 m-auto text-gray-800">
              2
            </h2>
          </li>
          <li className="md:mx-8 my-4">
            <p className="text-3xl my-2">🥗 🍝 🌮</p>
            <p>
              <span className="font-bold">Click "Let's eat!"</span>, and enjoy
              some recipes!
            </p>
            <h2 className="mt-2 text-atma font-bold text-2xl bg-[#8ddc93] dark:bg-[#ffdb20] rounded-full w-8 m-auto text-gray-800">
              3
            </h2>
          </li>
        </ul>
        <h1 className="mt-12 text-right text-atma font-bold text-[#8ddc93] dark:text-[#ffdb20] text-5xl">
          Enjoy! 😄
        </h1>
      </div>
    </div>
  );
}
