import { useState } from "react";

function Suggestions({ data = [], onSelect, onKeyDown /* cursor */ }) {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col text-lg border-1 z-10 rounded dark:text-white">
        {data.map((suggestion /* i */) => (
          // eslint-disable-next-line
          <li
            key={suggestion.id}
            className="pr-52 leading-10 bg-white hover:bg-slate-100 dark:text-black z-10"
            onClick={() => onSelect(suggestion)}
            onKeyDown={() => onKeyDown(suggestion)}
            // className={cursor === i ? "active" : null}
          >
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AutoComplete({ data, onSelect, onClick }) {
  // Tableau dans lequel s'ajoutent les ingrédients épinglés
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Ingrédients suggérés dans la liste de suggestion
  const [suggestions, setSuggestions] = useState([]);

  // Affiche la liste de suggestion (true) ou non (false)
  const [suggestionsActive, setSuggestionsActive] = useState(false);

  // Capte les caractères tapés dans la barre de recherche
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  // Permet de naviguer dans la liste de suggestion grâce
  // aux flèches du clavier
  // const [state, setState] = useState();

  /**
   * Renvoie si la suggestion sélectionnée fait partie de la
   * liste des suggestions existantes
   */

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedSuggestion(value);

    if (value.length > 2) {
      const filterSuggestions = data.filter(
        (suggestion) => suggestion.name.indexOf(value.toLowerCase()) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }

    if (selectedIngredients.length >= 3) {
      setSuggestionsActive(false);
    }
  };

  const handleSuggestionChange = (value) => {
    setSuggestions([]);
    setSelectedSuggestion(value);
    setSuggestionsActive(false);
    setSelectedSuggestion("");

    const newSelectedIngredients = [...selectedIngredients, value];
    setSelectedIngredients(newSelectedIngredients);
    onSelect(newSelectedIngredients);
  };

  /** au clic en dehors de la liste de suggestions,
   * celle-ci se replie
   */
  const handleClick = () => {
    setSuggestionsActive(false);
  };

  /** au clic sur la croix, l'ingrédient sélectionné
   * est supprimé
   */
  const handleDelete = (id) => {
    const deletableIngredient = selectedIngredients.filter((ingredient) => {
      return ingredient.id !== id;
    });
    setSelectedIngredients(deletableIngredient);
    onClick(deletableIngredient);
  };

  /** possibilité de naviguer au travers
   * de la liste de suggestions grâces aux
   * arrow keys (flèches haut et bas)
   */
  // const handleKeyDown = (e) => {
  //   state = {
  //     cursor: 0,
  //     result: [],
  //   };
  //   if (e.keyCode === 38 && cursor > 0) {
  //     setState((prevState) => ({
  //       cursor: prevState.cursor - 1,
  //     }));
  //   } else if (e.keyCode === 40 && cursor < result.length - 1) {
  //     setState((prevState) => ({
  //       cursor: prevState.cursor + 1,
  //     }));
  //   }
  // };

  return (
    // eslint-disable-next-line
    <div onClick={handleClick}>
      <h2 className="flex justify-center md:pr-44 mb-4 mt-12 text-mada text-xl text-gray-800 dark:text-white">
        Choose your ingredients:{" "}
      </h2>
      <form>
        <div className="flex justify-center">
          <input
            type="text"
            className="max-w-[90%] h-14 w-96 pl-4 pr-20 border-1 border-black rounded-3xl focus:shadow focus:outline-none"
            placeholder="Add ingredients"
            value={selectedSuggestion}
            onChange={handleChange}
            disabled={selectedIngredients.length >= 3}
          />
        </div>
      </form>
      <div>
        {suggestionsActive && (
          <Suggestions
            data={suggestions}
            onSelect={handleSuggestionChange}
            // onKeyDown={handleKeyDown}
          />
        )}
      </div>
      <ul className="flex flex-col max-w-[50%] md:max-w-[100%] m-auto justify-center md:flex-row">
        {selectedIngredients.slice(0, 3).map((ingredient) => (
          <li
            className="mx-2 py-1 px-1 pl-4 mt-8 border-1 border-white dark:border-gray-800 drop-shadow text-white dark:text-zinc-800 flex justify-between rounded-3xl z-0 bg-[#8ddc93] cursor-default text-mada dark:bg-[#ffdb20]"
            key={ingredient.id}
          >
            {/* ingrédients épinglés */}
            {ingredient.name}
            <button
              type="button"
              key={ingredient.id}
              onClick={() => handleDelete(ingredient.id)}
              className="ml-2 font-bold text-atma hover:bg-green-800 bg-green-600 rounded-3xl px-2 dark:bg-yellow-500 hover:dark:bg-yellow-600"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
