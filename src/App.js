import React, { useEffect, useState } from "react";

export default function App() {
  
  const [nome, setNome]=useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consutar = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  return (
    <>
      <label>Digite um Nome</label><br/>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar("ls_nome", nome)}>Gravar Nome</button>
      <button onClick={()=>consutar("ls_nome")}>Ver Nome</button>
      <button onClick={()=>apagar("ls_nome")}>Remover Nome</button>
    </> 
  );
}

//função precisa ter o mesmo nome do arquivo.
