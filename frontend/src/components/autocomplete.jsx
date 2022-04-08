import { useState } from "react";

function Suggestions({ data = [], onSelect }) {
  return (
    <ul className="suggestions">
      {data.map((suggestion) => (
        // eslint-disable-next-line
        <li key={suggestion} onClick={() => onSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

function AutoComplete({ data }) {
  const ingredients = data.map((ingredient) => ingredient.toLowerCase());

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  /**
   * Renvoie si la suggestion sélectionnée fait partie de la
   * liste des suggestions existantes
   */
  const isValidSuggestion = () =>
    ingredients.includes(selectedSuggestion.toLowerCase());

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedIngredients([...selectedIngredients, selectedSuggestion]);
    setSelectedSuggestion("");
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="relative">
        {suggestionsActive && (
          <Suggestions data={suggestions} onSelect={handleSuggestionChange} />
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-3xl z-0 focus:shadow focus:outline-none"
            placeholder="Add ingredients"
            value={selectedSuggestion}
            onChange={handleChange}
          />
          <div className="absolute top-2 right-4" />
          <button
            disabled={!isValidSuggestion()}
            type="submit"
            className="h-10 w-20 text-white rounded-3xl bg-green-500 hover:bg-green-600 disabled:bg-gray-400"
          >
            Add
          </button>
        </form>

        <h2>Mes ingrédients</h2>
        <ul className="addIngredients">
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AutoComplete;
