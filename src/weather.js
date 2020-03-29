import React, { Component, useState, useEffect } from 'react'
const Weather = () => {
    //display the weather
    const [count, setCount] = useState(0);

    return (
        <div>
          <p>This is Where the Weather will be displayed</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <p>You clicked {count} times</p>
        </div>
      );
}
export default Weather;