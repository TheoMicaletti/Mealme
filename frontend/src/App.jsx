import Header from "@components/Header";
import Autocomplete from "@components/autocomplete";
import { autoCompleteData } from "@assets/data.js";
import Carrousel from "@pages/Carrousel";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Autocomplete data={autoCompleteData} />
      <Carrousel />
      <Footer />
    </div>
  );
}

export default App;
