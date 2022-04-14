import { useState } from "react";

function Suggestions({ data = [], onSelect }) {
  return (
    <ul className="absolute mx-8 my-14 w-64 text-lg z-10 bg-white border-1 rounded dark:text-white">
      {data.map((suggestion) => (
        // eslint-disable-next-line
        <li
          key={suggestion}
          className="leading-10 hover:bg-slate-100 dark:text-black"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
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

    if (value.length > 1) {
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
      <h2 className="mx-auto mt-16 lg:w-2/6 lg:h-2/6 w-3/5 h-3/5 dark:text-white text-mada">
        Choose your ingredients:{" "}
      </h2>
      <div className="mx-auto mt-2 lg:w-2/6 lg:h-2/6 w-3/5 h-3/5">
        <div className="">
          {suggestionsActive && (
            <Suggestions
              data={suggestions}
              onSelect={handleSuggestionChange}
              onClick={handleSubmit}
            />
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <input
                type="text"
                className="h-14 w-96 pl-10 pr-20 border-1 border-black rounded-3xl z-0 focus:shadow focus:outline-none"
                placeholder="Add ingredients"
                value={selectedSuggestion}
                onChange={handleChange}
              />
            </div>
            <ul className="absolute ml-4 inline-flex dark:text-white text-center">
              {selectedIngredients.map((ingredient) => (
                <li
                  className="mt-4 mr-4 w-24 text-white border-1 rounded-3xl bg-green-500 hover:bg-green-600 text-mada dark:bg-yellow-500 dark:hover:bg-yellow-600"
                  key={ingredient}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}