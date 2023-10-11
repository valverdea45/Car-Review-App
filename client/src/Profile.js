import React, { useContext } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"

function Profile() {

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()



  if(user === null || user.cars_reviewed === undefined ) {
    return <p>loading...</p>
  }


  function onLogout() {

    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })

    setUser({ username: "", reviews: []})
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
            <br/>
            <p>Userame: {user.username}</p>
            {user.bio ? 
            <div>
                <p>{user.bio}</p>
                <button onClick={handleClick}>Edit</button>
            </div>
            : 
            <div>
                <button onClick={onAddBio}>Add Bio</button>
            </div>
            }
            <p>Email: {user.email}</p>
            <br/>
            <label>Cars that you reviewed</label>
            <ul>
            {user.cars_reviewed.map((car) => {
              return (
                <li>{car}</li>
              )
            })}
            </ul>
            <button onClick={onLogout} >Logout</button>
        </div>
    )
}

// {id: 3, username: 'Valverdea45', email: null, bio: null}

export default Profile