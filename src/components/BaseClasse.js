import React from "react";

export default class BaseClasse extends React.Component {
  constructor(props) {
    super(props); //Passa o props para a super classe
    this.state = {
      canal: "CFB Cursos",
      cursos: "React",
      ativo: true,
      nome: this.props.nomeAluno,
    };
    this.status = this.props.status;
    let ad = this.ativarDesativar.bind(this)
    //Instruçoes do Construtor
  }

  ativarDesativar() {
    this.setState((state) => ({
      ativo: !state.ativo,
    }));
  }

  componentDidMount(){
    console.log('O componente foi criado')
  }

  componentDidUpdate(){
    console.log('O componente foi atualizado')
  }

  componentWillUnmount(){
    console.log('O componente foi removido')
  }

  render() {
    return (
      <>
        <h1>Componente de Classe</h1>
        <button onClick={this.ad}>Ativar/Desativar</button>
      </>
    );
  }
}
