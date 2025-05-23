import React from "react";

// export default function Peso(props) {
//     return(
//     <div>
//       <label>
//          Peso
//          <input type="text" value={props.peso} onChange={(e)=>{props.sp(e.target.value)}}/>
//       </label>
//     </div>
//   )
// }

class Peso extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div>
      <label>
        Peso
        <input 
          type="text" 
          value={this.props.peso} onChange={(e)=>{this.props.sp(e.target.value)}}
        />
      </label>
    </div>
  )
  }
}

export default Peso