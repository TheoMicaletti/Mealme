import { useState } from "react";

function Suggestions({ data = [], onSelect }) {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col text-lg border-1 z-10 rounded dark:text-white">
        {data.map((suggestion) => (
          // eslint-disable-next-line
          <li
            key={suggestion}
            className="pr-52 leading-10 bg-white hover:bg-slate-100 dark:text-black z-10"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AutoComplete({ data }) {
  const ingredients = data.map((ingredient) => ingredient.toLowerCase());

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  /**
   * Renvoie si la suggestion sélectionnée fait partie de la
   * liste des suggestions existantes
   */

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedSuggestion(value);

    if (value.length > 2) {
      const filterSuggestions = ingredients.filter(
        (suggestion) => suggestion.indexOf(value.toLowerCase()) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleSuggestionChange = (value) => {
    setSuggestions([]);
    setSelectedSuggestion(value);
    setSuggestionsActive(false);
    setSelectedIngredients([...selectedIngredients, value]);
    setSelectedSuggestion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="flex justify-center pr-44 mb-4 mt-12 dark:text-white text-mada">
        Choose your ingredients:{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 border-1 border-black rounded-3xl focus:shadow focus:outline-none"
            placeholder="Add ingredients"
            value={selectedSuggestion}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        {suggestionsActive && (
          <Suggestions
            data={suggestions}
            onSelect={handleSuggestionChange}
            onClick={handleSubmit}
          />
        )}
      </div>
      <ul className="flex justify-center">
        {selectedIngredients.slice(0, 3).map((ingredient) => (
          <li
            className="mt-8 mx-2 w-24 flex justify-center items-center text-white text-center border-1 rounded-3xl z-0 bg-green-500 hover:bg-green-600 text-mada dark:bg-yellow-500 dark:hover:bg-yellow-600"
            key={ingredient}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
}
