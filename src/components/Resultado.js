import React from 'react'

export default function Resultado(props) {
    return (
        <div>
            <p>Soma das Notas {props.somaNota}</p>
            <p>{props.somaNota >= 60 ? "Aprovado" : "Reprovado"}</p>
        </div>
    );
}