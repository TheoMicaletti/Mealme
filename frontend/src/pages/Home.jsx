import { useState } from "react";
import { Link } from "react-router-dom";
import IngredientsAutocomplete from "@components/IngredientsAutocomplete";

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <>
      <div className="absolute bg-[url('@assets/bg.jpg')] bg-fixed left-0 right-0 bottom-0 bg-no-repeat bg-top h-screen bg-cover -z-50 opacity-10" />
      <div className="m-40 rounded-3xl border-2 border-[#8ddc93] bg-[#8ddc93] drop-shadow-lg">
        <h1 className="mt-28 z-10 lg:text-6xl text-4xl dark:text-white text-center text-mada">
          Let&apos;s{" "}
          <span className="z-10 text-gradient text-atma font-bold">cook!</span>
        </h1>

        <IngredientsAutocomplete onSelect={setSelectedIngredients} />

        <div className="flex justify-center">
          <div className="flex mt-12">
            <Link
              to={`/carrousel?ingredients=${selectedIngredients.join(",")}`}
            >
              <button
                type="button"
                disabled={selectedIngredients.length === 0}
                className="w-32 text-center lg:text-2xl text-2xl border-2 rounded-3xl dark:text-white text-mada disabled:bg-gray-300"
              >
                Let&apos;s{" "}
                <span className="text-gradient text-atma font-bold pointer-events-none">
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
