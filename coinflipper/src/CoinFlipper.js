import React, {Component} from "react"
import Coin from "./Coin"

class CoinFlipper extends Component{

   static defaultProps = {
      headImage: "https://tinyurl.com/react-coin-heads-jpg",
      tailImage: "https://tinyurl.com/react-coin-tails-jpg"
   }

   constructor(props){
      super(props)
      this.state = {

      }
   }

   render(){
      return(
         <div>
            <h1>Let's flip a coin!</h1>
            <Coin face={this.props.headImage}/>
            <button>Flip Meee</button>
            <h3>Out of 0 flips, there have been 0 heads and 0 tails</h3>
         </div>
      )
   }
}

export default CoinFlipper