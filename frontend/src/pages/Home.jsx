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

  return (
    <>
      <div className="absolute bg-[url('@assets/bg.jpg')] top-0 left-0 right-0 bottom-0 h-min-screen bg-top bg-cover -z-50 opacity-10" />
      <h1 className=" z-10 text-6xl text-4xl dark:text-white text-center text-gray-800 text-mada">
        Let&apos;s{" "}
        <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold">
          cook!
        </span>
      </h1>
      <div className="my-20 md:my-36 pb-24 max-w-lg w-[90%] mr-auto ml-auto rounded-3xl border-2 dark:border-[#ffdb20] border-[#8ddc93] bg-[#8ddc93] dark:bg-[#ffdb20] drop-shadow-lg">
        <IngredientsAutocomplete
          onSelect={setSelectedIngredients}
          onClick={setSelectedIngredients}
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mt-12">
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
                className="w-40 z-10 mb-8 text-center lg:text-2xl bg-white dark:bg-gray-800 text-2xl p-1 rounded-3xl dark:text-white text-mada disabled:bg-gray-300 dark:disabled:bg-gray-300"
              >
                Let&apos;s{" "}
                <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold pointer-events-none">
                  eat!
                </span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row mx-auto">
            {dietLabels.map((label) => (
              <div key={label.id} className="flex my-2 md:mx-6 justify-start">
                <input
                  className="form-check-input appearance-none h-6 w-6 mx-2 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  value={label.name}
                  id="diet-checkbox"
                  onChange={handleLabelChange}
                />
                <label
                  className="form-check-label text-black capitalize font-bold"
                  htmlFor="diet-checkbox"
                >
                  {label.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
