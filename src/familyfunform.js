
import React, { Component } from 'react'

export default class Familyfunform extends Component {

    state = {
        value: 'enter activity'
    }

    handleChange = (event) => {
        // console.log(this.state.value)
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.value)
        this.setState({value:""})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <h4 className="form_label">What would you like to do?</h4>
                    <label className="label" placeholder="enter activity">Activity Name</label>
                    <input 
                    onChange={this.handleChange}
                    type="text" 
                    name="value"
                    value={this.state.value}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
