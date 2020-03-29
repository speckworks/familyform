import React, { Component, useState, useEffect } from 'react'
const Weather = () => {
    //display the weather
    const [count, setCount] = useState(0);

    return (
        <div>
          <div style={{width: "100px"}}>
          <iframe style={{display: "block", textAlign: "center", transform: "translate(550px, -170px)"}} 
                  src="https://cdnres.willyweather.com/widget/loadView.html?id=121344" 
                  width="799" 
                  height="82" 
                  frameborder="0" 
                  scrolling="no">

          </iframe>
          <a style={{
                    margin: "-20px", 
                    zIndex: "1", 
                    display: "block", 
                    textIndent: "-9999em", 
                    position: "relative",
                    height: "20px"}} 
              href="https://www.willyweather.com/ny/new-york-county/new-york.html" 
              rel="nofollow">New York Weather</a></div>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <p>You clicked {count} times</p>
        </div>
      );
}
export default Weather;