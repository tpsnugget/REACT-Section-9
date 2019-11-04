import React, {Component} from "react"
import Coin from "./Coin"

class CoinFlipper extends Component{

   constructor(props){
      super(props)
      this.state = {
         numHeads: 0,
         numTails: 0,
         numFlips: 0,
         currentFace: null
      }
      this.flipCoin = this.flipCoin.bind(this)
   }

   incrementHeads(curState){return {numHeads: curState.numHeads + 1, currentFace: "https://tinyurl.com/react-coin-heads-jpg"}}
   incrementTails(curState){return {numTails: curState.numTails + 1, currentFace: "https://tinyurl.com/react-coin-tails-jpg"}}
   incrementFlips(curState){return {numFlips: curState.numFlips + 1}}

   flipCoin() {
      var heads = Math.floor(Math.random() * 2)
      if(heads){
         this.setState(this.incrementHeads)
      }
      else {
         this.setState(this.incrementTails)
      }
      this.setState(this.incrementFlips)
   }

   render(){
      return(
         <div>
            <h1>Let's flip a coin!</h1>
            {this.state.currentFace !== null && <Coin face={this.state.currentFace}/> }
            <button onClick={this.flipCoin}>Flip Meee</button>
            <h3>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</h3>
         </div>
      )
   }
}

export default CoinFlipper