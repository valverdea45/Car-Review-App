import React from "react"

function Profile({ onLogout }) {
    return (
        <div>
            <h3> Profile Page! </h3>
            <button onClick={onLogout} >Logout</button>
        </div>
    )
}

export default Profile