import Recipes from "@pages/Recipe";
import React from "react";

export default function FavoriteRecipes({ isFavorite, handleClick }) {
  return (
    <button
      className={isFavorite ? "isFavorite" : "notFavorite"}
      onClick={handleClick}
      type="button"
    >
      {" "}
    </button>
  );
}
