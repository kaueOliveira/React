import React, { useState } from "react";
import Numero from "./components/Numero";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(10);

  return (
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum} />
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
