import React, { Component } from "react"
import "./Box.css"

class Box extends Component {
   render() {
      return (

            <span id={this.props.index} className="Box" style={{backgroundColor: this.props.color}}></span>
      )
   }
}

export default Box