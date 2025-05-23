import React from "react";

// export default function Calcular(props) {
//   const calc=()=>{
//     props.sr(props.peso/(props.altura*props.altura))
//   }
//   return(
//     <div>
//       <button onClick={calc}>Calcular</button>
//     </div>
//   )
// }

class Calcular extends React.Component {
  constructor(props) {
    super(props)
       
  }
  calcular(){
    this.props.sr(this.props.peso/(this.props.altura*this.props.altura))
  }
  render() {
      return(
        <div>
          <button onClick={()=> this.calcular()}>Calcular</button>
        </div>
      )
    }
}

export default Calcular