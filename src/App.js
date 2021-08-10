import React from "react";
import "./App.css";
import PokemonCard from "./pokecards/PokemonCard";
import pokemonData from "./pokemon/pokemon";

const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={bulbasaur} />
    </div>
  );
}

export default App;
