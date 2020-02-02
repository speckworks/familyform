import React from 'react';
const FunWheels = (props) => (<button>
    <div>
        <span 
        onClick={()=>props.handleClick(props.activity)}
        role="img" 
        aria-label="Ferris Wheel Emoji">
        {`🎡`}
        {props.funwheels}
        </span>
    </div>
    </button>);
export default FunWheels;