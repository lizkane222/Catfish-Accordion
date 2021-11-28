// EXTERNAL IMPORTS
import '../Styles/App.css';
// bring in React from React
import React from 'react'

// INTERNAL IMPORTS
import Welcome from "./App"

// define our functional component
function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Catfish Accordion -- <code>PTIGA</code> 
        </p>
        <a
          className="App-link"
          href="https://app.segment.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Segment
        </a>
        <Welcome name={"Liz"} date={props.date}/>
      </header>

    </div>
  );
}

export default App;
