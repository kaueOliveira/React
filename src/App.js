import React, {useState} from 'react'
import Tabela from './imc_components/Tabela'
import Peso from './imc_components/Peso'
import Altura from './imc_components/Altura'
import Calcular from './imc_components/Calcular'
import Resultado from './imc_components/Resultado'

export default function App() {
  const [peso, setPeso]=useState(0)
  const [altura, setAltura]=useState(0)
  const [resultado, setResultado]=useState(0)

  return(
    <>
      <Peso peso={peso} sp={setPeso}/>
      <Altura altura={altura} sa={setAltura}/>
      <Calcular peso={peso} altura={altura} sr={setResultado}/>  
      <Resultado resultado={resultado}/>
      <Tabela/>
    </>
  )
}