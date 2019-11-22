import React, { Component } from 'react'
import familyshot from './familyshot.png'
import Familyfunform from './familyfunform.js'




class Funcontainer extends Component {
    
    render() {
        return (
            <div className="fun-container">
      <header className="fun-container">
        <img src={familyshot} className="App-logo" alt="logo" />
        <p>
          <div className="label" >Dadding is fun</div>
          
         <form className="form">    < Familyfunform />     </form>
        </p>
      </header>
    </div>
        )
    }
}

export default Funcontainer