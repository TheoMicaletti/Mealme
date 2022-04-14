import { autoCompleteData } from "@assets/data.js";
import { Link } from "react-router-dom";
import Autocomplete from "@components/Autocomplete";

export default function Home() {
  return (
    <>
      <h1 className="mt-24 lg:text-6xl text-4xl dark:text-white text-center text-mada">
        Let&apos;s{" "}
        <span className="text-gradient text-atma font-bold">cook!</span>
      </h1>
      <Autocomplete data={autoCompleteData} />
      <div className="mt-24 flex justify-center">
        <Link to="/Carrousel">
          <button
            type="button"
            className="w-32 lg:text-2xl text-2xl border-2 rounded-3xl dark:text-white text-mada"
          >
            Let&apos;s{" "}
            <span className="text-gradient text-atma font-bold">eat!</span>
          </button>
        </Link>
      </div>
    </>
  );
}
