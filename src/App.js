import React, { useState } from "react";
import Led from "./components/Led";

export default function App() {
  const [ligado, setLigado] = useState(false);
  return (
    <>
      <Led ligado={ligado} setLigado={setLigado}/>    
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
