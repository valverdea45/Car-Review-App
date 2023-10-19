import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
import Bio from "./Bio"

function Profile() {

  const { user, setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()


  if(user.username.length === 0 || user.cars_reviewed === undefined ) {
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

    function onBioChange(bio) {

        const objToBeSent = {
          bio: bio
        }

        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
          if (res.ok) {
            res.json().then((updatedUser) => setUser(updatedUser))
          } else {
            res.json().then((res) => {
              setErrors(res.errors)
            })
          }
        })
    }

    return (
        <div>
            <h3> Profile Page! </h3>
            <br/>
            <p>Userame: {user.username}</p>
            <Bio user={user} onBioChange={onBioChange} errors={errors}/>
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
