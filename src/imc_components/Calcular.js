import React from "react";

export default function Calcular(props) {
  const calc=()=>{
    props.sr(props.peso/(props.altura*props.altura))
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}