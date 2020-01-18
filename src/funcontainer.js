import React, { Component } from 'react'
import familyshot from './familyshot.png'
import Familyfunform from './familyfunform.js'
import Funactivities from './funactivities'
class Funcontainer extends Component {   
    render() {
        const activitiesTransformed = this.props.activities.map(
               (activity)=> {
            return <Funactivities 
                    className="activity"
                    key={activity.id}
                    activity= {activity.name} />})
        return (
    <div className="fun-container">
        <header className="form">
        <Familyfunform 
            handleSubmit={this.props.handleSubmit} 
            />  
            {activitiesTransformed}
            <img src={familyshot} 
            className="familyshot" 
            alt="john and Fam"
            />
            <div className="label" >
            Dadding is fun
            </div>
        </header>
    </div>
        )
    }
}

export default Funcontainer;