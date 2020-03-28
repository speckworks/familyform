import React, { Component } from 'react'
import Funcontainer from './funcontainer.js'
import './App.css';
export default class App extends Component {
  state = {activities:
    [
    {name:"take a walk in the park",
    id:1}, 
    {name:'go stargazing', 
    id:2},
    {name:"go hiking",
    id:3},
    {name:"go swimming",
    id:4}
  ]
}
  handleSubmit = (event) => {
    console.log(event)
  
    let newActivity = {name:event}
    this.setState({
      activities:[...this.state.activities, newActivity]
    })
  }
    render() {
    return (
      <div className="label dadding">
      Dadding is Fun!
        <Funcontainer 
        handleSubmit= {this.handleSubmit} 
        activities= {this.state.activities} 
        addActivity={this.addActivity} 
        />
      </div>
    )
  }
}
