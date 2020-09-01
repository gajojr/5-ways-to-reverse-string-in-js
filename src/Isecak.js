import React from "react";
import "./styles/Isecak.css";

export default function Isecak({ imeMetode, opisPristupa, kodES6, kodES5 }) {
  return (
    <div className="container2">
      <div className="tekst">
        <h2>{imeMetode}</h2>
        <p>{opisPristupa}</p>
      </div>
      <div className="razmak">
        <p>ES6:</p>
        <button type="button">copy code</button>
      </div>
      <div className="kod">
        <code>{kodES6}</code>
      </div>
      <div className="razmak">
        <p>ES5:</p>
        <button type="button">copy code</button>
      </div>
      <div className="kod">
        <code>{kodES5}</code>
      </div>
    </div>
  );
}
