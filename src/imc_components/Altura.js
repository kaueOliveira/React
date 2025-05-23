import React from "react";

export default function Altura(props) {
    return(
    <div>
      <label>
        Altura
        <input type="text" value={props.altura} onChange={(e)=>{props.sa(e.target.value)}}/>
      </label>
    </div>
  )
}