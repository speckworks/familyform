
import React, { Component } from 'react'
import { string } from 'postcss-selector-parser'


// let familyFunFormState = () => {
//         inputValue = ''
// }

const Familyfunform = (props)=>{

        return (

            <div>
            <form className="form"> 
            <h4 className="form_label">What would you like to do?</h4>
                <label className="label">Activity Name</label>
                <input 
                name="textInput"
                type="text" 
                value={props.textInput}
                onChange={(e)=>props.controlledInput(e)}
                />
                </form>
            </div>
)
}


export default Familyfunform;
