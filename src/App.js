import React, {useState} from "react";
import Globais from './components/Globais'
import Info from './components/info'

export default function App() {

  const [resumo, setResumo]=useState(Globais.resumo)

  const gravarResumo =()=> {
    Globais.resumo = resumo;
  }

  const verResumo =()=> {
    alert(Globais.resumo)
  }

  return (
    <>
      <Info/>
      <hr/>
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr/>
      <input type="text" value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
      <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
      <button onClick={()=>verResumo()}>Ver Resumo</button>
    </> 
  );
}

//função precisa ter o mesmo nome do arquivo.
