import React from "react";
import LedGreen from "./imgs/led-circle-green.png";
import LedRed from "./imgs/led-circle-red.png";

export default function Led(props) {
  
  return (
    <>
      <img style={{ width: "50px" }} src={props.ligado ? LedGreen : LedRed} alt="" />
      <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
