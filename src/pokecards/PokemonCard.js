import React from "react";
import PokeBase from "./PokecardBase";

import "./poke-card.css";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="card_container">
      <img
        className="image_small"
        src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
        alt=""
      ></img>
      <div className="pokemon_name">{name.english}</div>
      <div className="type_container">
        {type.map((subtype) => (
          <span className={`type ${subtype.toLowerCase()}`}>{subtype}</span>
        ))}
      </div>
      {console.log(base)}
      <PokeBase base={base} />
    </div>
  );
}

export default PokemonCard;
