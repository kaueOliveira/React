import React, { useState } from "react";

const medidas = [
  { classificacao: "Abaixo do Peso", imc: "Abaixo de 18,5" },
  { classificacao: "Peso Normal", imc: "Entre 18,5 e 24,9" },
  { classificacao: "Sobrepeso", imc: "Entre 25 e 29,9" },
  { classificacao: "Obesidade Grau I", imc: "Entre 30 e 34,9" },
  { classificacao: "Obesidade Grau II", imc: "Entre 35 e 39,9" },
  { classificacao: "Obesidade Grau III ou Mórbida", imc: "Acima de 40" },
];

const linhas = () => {
  const li = [];

  medidas.forEach((medida) => {
    li.push(
      <tr>
        <td>{medida.classificacao}</td>
        <td>{medida.imc}</td>
      </tr>
    );
  });

  return li;
};

const tabelaImc = () => {
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>{linhas()}</tbody>
    </table>
  );
};

const info = (p, setP, a, setA) => {
  return (
    <div>
      <label>Informe seu Peso:</label>
      <input type="text" value={p} onChange={(e) => setP(e.target.value)} />
      <br />
      <label>Informe sua Altura:</label>
      <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
    </div>
  );
};

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  return (
    <>
      {info(peso, setPeso, altura, setAltura)}
      <button
        onClick={() => setResultado(parseFloat(peso / (altura * altura)).toFixed(2))}
      >
        Calcular
      </button>
      <p>Resultado: {resultado}</p>
      {tabelaImc()}
    </>
  );
}

//função precisa ter o mesmo nome do arquivo.
