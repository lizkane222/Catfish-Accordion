// EXTERNAL IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// INTERNAL IMPORTS
import './Styles/App.css';
import App from './App';
// import Profile from './Components/Profile';





ReactDOM.render(
      // <Router>
        <App/>,
        document.getElementById('root')
      // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
