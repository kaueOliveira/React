import React from "react";

// export default function Altura(props) {
//     return(
//     <div>
//       <label>
//         Altura
//         <input type="text" value={props.altura} onChange={(e)=>{props.sa(e.target.value)}}/>
//       </label>
//     </div>
//   )
// }

class Altura extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div>
      <label>
        Altura
        <input type="text" value={this.props.altura} onChange={(e)=>{this.props.sa(e.target.value)}}/>
      </label>
    </div>
  )
  }
}

export default Altura