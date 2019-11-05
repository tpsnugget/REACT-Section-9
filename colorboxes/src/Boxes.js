import React, { Component } from "react"
import Box from "./Box"

class Boxes extends Component {

   static defaultProps = {
      numBoxes: 16
   }

   constructor(props) {
      super(props)
      this.state = {
         colorArray: ["rgb(0,0,0)", "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", "rgb(255,255,255)", "rgb(150,0,0)", "rgb(0,150,0)", "rgb(0,0,150)", "rgb(150,150,0)", "rgb(150,0,150)", "rgb(0,150,150)", "rgb(12, 150, 255)", "rgb(255, 150, 12)", "rgb(150,150,150)", "rgb(75,75,75)"]
         // colorArray: Array.from({ length: this.props.numBoxes })
      }
      this.clickHandler = this.clickHandler.bind(this)
      this.newColor = this.newColor.bind(this)
      this.randNum = this.randNum.bind(this)
   }

   clickHandler(e){
      var oldColor = e.target.style.backgroundColor
      var newColor = this.newColor()
      // console.log(e.target.id)
      // console.log(oldColor)
      // console.log(newColor)
      // console.log(this.state.colorArray)
      var oldArray = [...this.state.colorArray]
      // console.log(oldArray)
      var newArray = [...this.state.colorArray]
      newArray[e.target.id] = newColor
      // console.log(newArray)
      this.setState({colorArray: newArray})
   }

   randNum(){
      return Math.floor(Math.random() * 256)
   }

   newColor(){
      var r = this.randNum()
      var g = this.randNum()
      var b = this.randNum()
      var color = "rgb(" + r + "," + g + "," + b + ")"
      return color
   }

   render() {
      return (
         <div>
            <button onClick={this.clickHandler}> {this.state.colorArray.map((e, index) => <Box color={e} index={index}/>)} </button>
         </div>
      )
   }
}

export default Boxes