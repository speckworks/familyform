import React, { Component } from 'react'
import familyshot from './familyshot.png'
import Familyfunform from './familyfunform.js'




class Funcontainer extends Component {
    
    state = {
      textInput: ""
    }

controlledInput=(event)=>{
  console.log(event.target.value)
  let value = event.target.value
  let name = event.target.name
  this.setState({[name]: value })
}
    render() {
        return (
            <div className="fun-container">
            <header className="fun-container">
            <img src={familyshot} className="App-logo" alt="logo" />
            <p>
              <div className="label" >Dadding is fun</div>
          
                
             <Familyfunform 
             controlledInput={this.controlledInput}
             textInput={this.state.textInput}/>

            </p>
            </header>
            </div>
        )
    }
}

export default Funcontainer