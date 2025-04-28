import React from "react";
import Dados from "./Dados.js";

export default function Corpo() {
  const cnl =()=> {
    return "CFB Cursos";
  } 
  const yt = "cfbcursos.com";
  const crs = "Curso de React";

  const somar =(v1, v2)=> {
    return v1 + v2;
  }

  return (
    <section>
      <h2>Curso de React</h2>
      <p>Bonjour à tous! Je suis Lucie et je vis en Belgique.</p>
      <p>
        Je parle français couramment et je peux discuter de divers sujets
        complexes.
      </p>
      <Dados canal={cnl} youtube={yt} curso={crs} somar={somar}/>
    </section>
  );
}
