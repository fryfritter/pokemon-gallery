import React from "react";
import "./App.css";
import PokemonCard from "./pokecards/PokemonCard";
import pokemonData from "./pokemon/pokemon";

const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      {pokemonData.map((poke) => (
        <PokemonCard pokemon={poke} />
      ))}
    </div>
  );
}

export default App;
