import React from "react";
import "./styles/Isecak.css";

export default function Isecak({ imeMetode, opisPristupa, kodES6, kodES5 }) {
  return (
    <div className="container2">
      <div className="tekst">
        <h2>{imeMetode}</h2>
        <p>{opisPristupa}</p>
      </div>
      <p>ES6:</p>
      <div className="kod">
        <code>
          {kodES6.split("/n").map((it, i) => (
            <div key={"x" + i}>{it}</div>
          ))}
        </code>
      </div>
      <p>ES5:</p>
      <div className="kod">
        <code>
          {kodES5.split("/n").map((it, i) => (
            <div key={"x" + i}>{it}</div>
          ))}
        </code>
      </div>
    </div>
  );
}
