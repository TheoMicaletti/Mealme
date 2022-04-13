import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "@components/Header";
import Carrousel from "@pages/Carrousel";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Legal from "@pages/Legal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carrousel" element={<Carrousel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
