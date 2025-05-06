import React, { useState } from "react";
import Nota from "./components/Nota";
import Resultado from "./components/Resultado";

export default function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);

  return (
    <>
      <Nota num={1} nota={nota1} setNota={setNota1}/>
      <Nota num={2} nota={nota2} setNota={setNota2}/>
      <Nota num={3} nota={nota3} setNota={setNota3}/>
      <Nota num={4} nota={nota4} setNota={setNota4}/>
      <Resultado somaNota={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)}/>
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
