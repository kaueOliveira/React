import React from "react";

class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.modelo = "Golf";
    this.state = {
      ligado: false,
      velAtual: 0,
    };
    this.ld = this.ligarDesligar.bind(this)
  }

  ligarDesligar() {
    //this.setState({ligado:!this.state.ligado})
    this.setState((state) => ({
      ligado: !state.ligado,
    }));
  }

  acelerar() {
    this.setState((state, props) => ({
      velAtual: state.velAtual + props.fator,
    }));
  }

  render() {
    return (
      <div>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Estado: {this.state.ligado ? "ligado" : "desligado"}</p>
        <p>Velocidade: {this.state.velAtual}</p>
        <button onClick={this.ld}>
          {this.state.ligado ? "Desligar" : "Ligar"}
        </button>
        <button onClick={()=> this.acelerar()}>Acelerar</button>
      </div>
    );
  }
}

export default Carro;
