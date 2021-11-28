import '../Styles/Profile.css';
// bring in React from React
import React from 'react'
import profileData from "../Data/profileData"



// define our functional component
function Profile(props) {
    return (
        <div className="profile ">
            <h1>{props.profile.name}</h1>
            <p>{props.date}</p>
            <h2>{props.profile.username}</h2>
            <p>{props.profile.age}</p>
            <p></p>
            

        </div>
    )
}

export default Profile;