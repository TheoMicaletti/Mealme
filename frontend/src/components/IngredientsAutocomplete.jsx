import React, { useState, useEffect } from "react";

import { getIngredientsList } from "@services/api.js";
import AutoComplete from "@components/Autocomplete";

export default function IngredientsAutocomplete({ onSelect }) {
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    (async function getList() {
      setIngredients(
        (await getIngredientsList()).map(
          (ingredient) => ingredient.strIngredient
        )
      );
    })();
  }, []);

  if (!ingredients) {
    return null;
  }

  return <AutoComplete data={ingredients} onSelect={onSelect} />;
}
