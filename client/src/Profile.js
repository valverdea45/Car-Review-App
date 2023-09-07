import React, { useContext } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"

function Profile() {

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()


  function onLogout() {

    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })

    console.log(user)
    setUser(null)
    navigate("/")
  }

    function handleClick() {
        console.log("I was clicked!!")
    }

    function onAddBio() {
        console.log("I was clicked to add bio!")
    }

    return (
        <div>
            <h3> Profile Page! </h3>
            {user?.bio ? 
            <div>
                <p>{user.bio}</p>
                <button onClick={handleClick}>Edit</button>
            </div>
            : 
            <div>
                <p>Add a bio!</p>
                <button onClick={onAddBio}>+</button>
            </div>
            
            }
            <button onClick={onLogout} >Logout</button>
        </div>
    )
}

// {id: 3, username: 'Valverdea45', email: null, bio: null}

export default Profile