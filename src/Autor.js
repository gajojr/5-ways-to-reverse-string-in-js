import React from "react";
import "./styles/Autor.css";

export default function Autor({ ime, opis, adresaSlike }) {
  return (
    <div className="container">
      <div className="centered">
        <img src={adresaSlike} alt="slika autora" />
        <h1>{ime}</h1>
      </div>
      <p>{opis}</p>
    </div>
  );
}
