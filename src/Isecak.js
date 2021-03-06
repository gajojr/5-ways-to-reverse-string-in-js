import React from "react";
import "./styles/Isecak.css";

const formattedCode = (code) => {
  return code.split("/n").map((item, i) => {
    const brojTabova = (item.match(/&tab;/g) || []).length;
    item = " ".repeat(4 * brojTabova) + item.replaceAll("&tab;", "");
    if (brojTabova === 1) {
      return <div key={i}>&nbsp;&nbsp;&nbsp;&nbsp;{item}</div>;
    } else if (brojTabova === 2) {
      return (
        <div key={i}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}
        </div>
      );
    }
    return <div key={i}>{item}</div>;
  });
};

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
        <code>{formattedCode(kodES6)}</code>
        <br />
      </div>
      <div className="razmak">
        <p>ES5:</p>
        <button type="button">copy code</button>
      </div>
      <div className="kod">
        <code>{formattedCode(kodES5)}</code>
      </div>
    </div>
  );
}
