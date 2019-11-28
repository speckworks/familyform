import React, { Component } from 'react'




const FunWheels = (props) => <button>
    <div>
        {<li onClick={props.handleClick}
        > 
        🎡 {props.funwheels}</li>}
    </div>
    </button>

export default FunWheels