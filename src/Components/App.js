// EXTERNAL IMPORTS
// import '../Styles/App.css';
// bring in React from React
import React from 'react'

// INTERNAL IMPORTS
import Welcome from "./Welcome"
import Profile from "./Profile"

let createdAt = Date.now()
let updatedAt = Date.now()
let today = Date.now()


let userId = Math.floor(Math.random()* 10000000)
let anonymousIdGen = [Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000)]
let anonymousId = `${anonymousIdGen[0]}-${anonymousIdGen[1]}-${anonymousIdGen[2]}-${anonymousIdGen[3]}`
let profileVersion = 0


const profile = {
  firstName : "Liz",
  lastName : "Kane",
  name : "Liz Kane",
  age : "30",
  birthday : "02/22/1991",
  version : profileVersion,
  username : "Lizay Kay",
  userId : `${userId}_${profileVersion}`,
  anonymousId : anonymousId,
  createdAt : createdAt,
  updatedAt : updatedAt
}


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
      <Profile createdAt={createdAt} updatedAt={updatedAt} date={today} profile={profile}/>
    </div>
  );
}

export default App;
