import { Link } from "react-router-dom";
import IngredientsAutocomplete from "@components/IngredientsAutocomplete";

export default function Home() {
  return (
    <>
      <div className="absolute bg-[url('@assets/bg.jpg')] left-0 right-0 bottom-0 bg-no-repeat bg-top h-screen bg-cover -z-50 opacity-10" />
      <h1 className="pt-36 z-10 text-6xl text-4xl dark:text-white text-center text-gray-800 text-mada">
        Let&apos;s{" "}
        <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold">
          cook!
        </span>
      </h1>
      <div className="m-36 z-10 max-w-xl w-[90%] ml-auto mr-auto pl-8 pr-8 rounded-3xl border-2 border-[#8ddc93] dark:border-[#ffdb20] bg-[#8ddc93] dark:bg-[#ffdb20] drop-shadow-lg">
        <IngredientsAutocomplete />
        <div className="flex justify-center">
          <div className="flex mt-12">
            <Link to="/Carrousel">
              <button
                type="button"
                className="w-40 z-10 mb-28 text-center lg:text-2xl bg-white dark:bg-gray-800 text-2xl p-1 rounded-3xl dark:text-white text-mada"
              >
                Let&apos;s{" "}
                <span className="text-[#8ddc93] dark:text-[#ffdb20] text-atma font-bold">
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
