import Header from "@components/Header";
import Autocomplete from "@components/autocomplete";
import { autoCompleteData } from "@assets/data.js";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <h1 className="mt-8 mb-4 mt-24 lg:text-6xl text-4xl dark:text-white text-center text-mada">
        Let&apos;s{" "}
        <span className="text-gradient text-atma font-bold">cook!</span>
      </h1>
      <Header />
      <Autocomplete data={autoCompleteData} />
      <Footer />
    </>
  );
}
