import React, { Component } from 'react'
import FunWheels from "./FunWheels"

export default class Funactivities extends Component {

        state={
            funwheels:0
        }

        handleClick = (event) =>{
        return this.setState({funwheels:this.state.funwheels + 1})
        }

    render() {


        let activitiesArr = this.props.activities
        // console.log(activitiesArr)


        let funActivities = activitiesArr.map(
            (activity, index)=> 
            {return <Funactivities key={index} activity= {activity} />}
         )   

        return (<ul>
        {funActivities}
         < FunWheels funwheels={this.state.funwheels} handleClick={this.props.handleClick} /> 
        </ul>
        )
    }
}
