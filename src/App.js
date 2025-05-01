import React, {useState} from "react";


export default function App() {

  const [cor, setCor] = useState(1)

  const vermelho = {color: '#f00'}
  const verde = {color: '#0f0'}
  const azul = {color: '#00f'}

  const retCor =(c)=> {
    if (c === 1) {
      return vermelho
    } else if (c === 2) {
      return verde
    } else {
      return azul
    }
  }

  const mudaCor =()=> {
    console.log(cor)
    setCor(cor+1)
    if (cor > 2) {
      setCor(1)
    }
  }
  
  return (
    <>
      <h1 style={retCor(cor)}>CFB Cursos</h1>
      <button onClick={()=>mudaCor()}>Mudar Cor</button>  
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
