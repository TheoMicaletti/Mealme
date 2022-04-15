import { Link } from "react-router-dom";
import IngredientsAutocomplete from "@components/IngredientsAutocomplete";

export default function Home() {
  return (
    <>
      <div className="absolute bg-[url('@assets/bg.jpg')] bg-fixed left-0 right-0 bottom-0 bg-no-repeat bg-top h-screen bg-cover -z-50 opacity-10" />
      <div>
        <h1 className="mt-28 z-10 lg:text-6xl text-4xl dark:text-white text-center text-mada">
          Let&apos;s{" "}
          <span className="z-10 text-gradient text-atma font-bold">cook!</span>
        </h1>
        <IngredientsAutocomplete />
        <div className="flex justify-center">
          <div className="flex mt-12">
            <Link to="/Carrousel">
              <button
                type="button"
                className="w-32 text-center lg:text-2xl text-2xl border-2 rounded-3xl dark:text-white text-mada"
              >
                Let&apos;s{" "}
                <span className="text-gradient text-atma font-bold">eat!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
