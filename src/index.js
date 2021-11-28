// EXTERNAL IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// INTERNAL IMPORTS
import './Styles/App.css';
import App from './Components/App';
import Profile from './Components/Profile';



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


ReactDOM.render(
  <div>
    <App date={today}/>,
    <Profile createdAt={createdAt} updatedAt={updatedAt} profile={profile}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
