import React, { Component } from 'react'
export default class Funactivities extends Component {
    state={
        funwheels:0
            }
    handleClick = (event) => {
    return this.setState({
        funwheels:this.state.funwheels + 1
        })
    }
    render() {
        const {activity} = this.props
        return (<div>
            {activity}
            <button onClick={this.handleClick}>
                🎡{ this.state.funwheels }
            </button>
            </div> 
        )
    }
  }  