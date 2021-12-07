// EXTERNAL IMPORTS
// bring in React from React
import React from 'react';
// INTERNAL IMPORTS
import '../Styles/Profile.css';
import {profileData} from "../Data/profileData";



// define our functional component
function Profile(props) {
    let pd = props.profileData

    let thisYear = props.thisYear
    let birthYear = thisYear- pd.age

    return (
        <div className="profile ">
            <h1>{pd.name}</h1>
            <p>Today : {pd.date}</p>
            <p>Updated At : {pd.updatedAt}</p>
            <h2>{pd.username}</h2>
            <p>{pd.age} : {birthYear}</p>
        </div>
    )
}

export default Profile;