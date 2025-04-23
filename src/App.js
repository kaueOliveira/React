import React from "react";
import Apple from "./components/imgs/apple.png"
// import Google from "./components/imgs/google.png"

export default function App() {
  const canal = 'CFB Cursos'

  const curso =()=> {
    return 'Curso de React'
  }

  return (
    <section>
      <header>
        <p>{'Curso:' + curso}</p>
        <p>Canal:{canal}</p>
      </header>
      <section>
        <img src="/img/google.png" alt="Baixar na Google Store"/>
        <img src={Apple} alt="Baixar na Apple Store"/> 
      </section>
    </section>
  );
}

//função precisa ter o mesmo nome do arquivo.
