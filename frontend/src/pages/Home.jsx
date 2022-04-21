import { useState } from "react";
import { Link } from "react-router-dom";
import IngredientsAutocomplete from "@components/IngredientsAutocomplete";

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <>
      <div className="absolute bg-[url('@assets/bg.jpg')] top-0 left-0 right-0 bottom-0 h-min-screen bg-top bg-cover -z-50 opacity-10" />
      <h1 className=" z-10 text-6xl text-4xl dark:text-white text-center text-gray-800 text-mada">
        Let&apos;s{" "}
        <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold">
          cook!
        </span>
      </h1>
      <div className="m-36 pb-24 max-w-lg w-[90%] mr-auto ml-auto rounded-3xl border-2 dark:border-[#ffdb20] border-[#8ddc93] bg-[#8ddc93] dark:bg-[#ffdb20] drop-shadow-lg">
        <IngredientsAutocomplete onSelect={setSelectedIngredients} />
        <div className="flex justify-center">
          <div className="flex mt-12">
            <Link
              to={`/carrousel?ingredients=${selectedIngredients.join(",")}`}
            >
              <button
                type="button"
                disabled={selectedIngredients.length === 0}
                className="w-40 z-10 text-center lg:text-2xl bg-white dark:bg-gray-800 text-2xl p-1 rounded-3xl dark:text-white text-mada disabled:bg-gray-300"
              >
                Let&apos;s{" "}
                <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold pointer-events-none">
                  eat!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
