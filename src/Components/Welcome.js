// import logo from './logo.svg';
// import './App.css';
// bring in React from React
import React from 'react'
// define our functional component



// define our functional component
function Welcome(props) {
  // what should the component return
  return(
    // Make sure to return some UI
    <div className="App-header">
        <p className="float-right">{props.date}</p>
        <h1>{props.name}</h1>
        <h2>Welcome to Catfish Accordion</h2>
    </div>
  )
}
export default Welcome
