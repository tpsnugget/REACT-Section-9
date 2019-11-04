import React, { Component } from "react"
import "./Coin.css"

class Coin extends Component {
   render() {
      return (
         <div>
            <img className="Coin" src={this.props.face} alt={this.props.face}/>
         </div>
      )
   }
}

export default Coin