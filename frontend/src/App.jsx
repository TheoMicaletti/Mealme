import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import Carrousel from "@pages/Carrousel";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Legal from "@pages/Legal";
import Loader from "@components/Loader";
import Recipe from "@pages/Recipe";
import LoginForm from "@components/LoginForm";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header handleLoginClick={handleLoginClick} />
        <LoginForm isShowLogin={isShowLogin} />
        <main className="mt-36">
          {loader ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrousel" element={<Carrousel />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          )}
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
