
import React, { Component } from 'react'
import { string } from 'postcss-selector-parser'


// let familyFunFormState = () => {
//         inputValue = ''
// }


export default class Familyfunform extends Component {

    state: IfamilyFunFormState = {
        inputValue: "string"
    }



    render() {
        return (

            <div>
            <h4 className="form_label">What would you like to do?</h4>
                <label className="label">Activity Name</label>
                <input type="text" />
            </div>
        )
    }
}
