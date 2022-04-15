import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import Carrousel from "@pages/Carrousel";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Legal from "@pages/Legal";
import Loader from "./Loader";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <BrowserRouter>
      <Header />
      <Loader />
      <Footer />
    </BrowserRouter>
  ) : (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="mt-36">
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
