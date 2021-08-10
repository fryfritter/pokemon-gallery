import React from "react";
import "./poke-card.css";

function PokeBase(base) {
  const { Attack, Defence, HP, SpAttack, Speed } = base.base;

  return (
    <div className="base_container">
      {console.log(base)} HP : {HP} <br />
      Attack : {Attack} <br />
      Defence : {Defence} <br />
      SpAttack : {SpAttack} <br />
      Speed : {Speed} <br />
    </div>
  );
}

export default PokeBase;
