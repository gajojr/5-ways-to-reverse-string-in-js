import React from "react";
import "./styles/Footer.css";

export default function Autor({
  igicon,
  eicon,
  ghicon,
  igAdresa,
  eAdresa,
  githubAdresa,
  ghAdresaProjekta,
}) {
  return (
    <div className="container4">
      <div className="adrese">
        <a href={igAdresa}>
          <img src={igicon} alt="ig adresa" />
        </a>
        <a href={`mailto:${eAdresa}`}>
          <img src={eicon} alt="email adresa" />
        </a>
        <a href={githubAdresa}>
          <img src={ghicon} alt="email adresa" />
        </a>
      </div>
      <div className="projekat">
        github project address: <a href={ghAdresaProjekta}>here</a>
      </div>
    </div>
  );
}
