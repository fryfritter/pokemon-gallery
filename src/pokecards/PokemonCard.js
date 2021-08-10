import React from "react";
import "./poke-card.css";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return <div className="card_container">{name.english}</div>;
}

export default PokemonCard;
