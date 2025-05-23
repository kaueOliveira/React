import React from "react";

// export default function Resultado(props) {
//     return(
//     <div>
//       <p>Resultado: {props.resultado.toFixed(2)}</p>
//     </div>
//   )
// }

class Resultado extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>       
        <p>Resultado: {this.props.resultado.toFixed(2)}</p>
      </div>
    )
  }
}

export default Resultado