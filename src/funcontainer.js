import React, { Component } from 'react'
import familyshot from './familyshot.png'
import Familyfunform from './familyfunform.js'
import Funactivities from './funactivities'




class Funcontainer extends Component {
    
    render() {
        return (
    <div className="fun-container">

        < Funactivities activities={this.props.activities} />
           
            
        <header className="fun-container">
            <img src={familyshot} className="familyshot" alt="john and Fam"/>
            <div className="label" >Dadding is fun</div>
            <div className="form">    < Familyfunform handleSubmit={this.props.handleSubmit} />  </div>
        </header>
    </div>
        )
    }
}

export default Funcontainer