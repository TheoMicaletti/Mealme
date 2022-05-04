import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LoginContext from "@contexts/LoginContext";
import Image from "@assets/logoName.png";
import DarkImage from "@assets/darkLogoName.png";

function Header({ handleLoginClick }) {
  const { currentUser } = useContext(LoginContext);

  const handleClick = () => {
    handleLoginClick();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-100% z-40">
        <nav className="backdrop-blur-xl bg-transparent h-18" />
        <Link to="/">
          <img
            className="hover:cursor-pointer fixed top-0 left-0 right-0 w-52 m-2 dark:hidden"
            src={Image}
            alt="LogoName"
          />
          <img
            className="hover:cursor-pointer fixed top-0 left-0 right-0 w-50 m-2 hidden dark:block"
            src={DarkImage}
            alt="LogoName"
          />
        </Link>
      </div>

      <div className="z-40 fixed">
        <div className="fixed text-mada top-3 right-40 py-3 pl-4 pr-2 text-xl text-gray-800 dark:text-white">
          {currentUser ? `Welcome` : ""}{" "}
          <span className="text-atma font-bold ml-1 capitalize">
            {currentUser?.username ?? ""}
          </span>
        </div>
        {!currentUser && (
          <div className="fixed text-mada top-4 right-4">
            <button
              id="login"
              type="button"
              onClick={handleClick}
              className="py-2 rounded-3xl pl-4 pr-2 text-mada text-xl border-1 border-white bg-[#8ddc93] dark:bg-[#ffdb20] drop-shadow-md"
            >
              Login
              <span className="ml-2 bg-gray-800 rounded-full px-2 py-1.5 inline dark:hidden">
                👩
              </span>
              <span className="ml-2 bg-zinc-800 rounded-full px-2 py-1.5 hidden dark:inline">
                👱‍♂️
              </span>
            </button>
          </div>
        )}
        {currentUser && (
          <div className="fixed text-mada top-4 right-4">
            <button
              id="logout"
              type="button"
              onClick={handleSubmit}
              className="py-2 rounded-3xl pl-4 pr-2 text-mada text-xl border-1 border-red-700 bg-red-400 drop-shadow-md"
            >
              Logout
              <span className="ml-2 bg-red-800 rounded-full pl-1 pr-2 py-1.5 inline">
                👋
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
