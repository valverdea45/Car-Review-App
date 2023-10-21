import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
import Bio from "./Bio"

function Profile() {

  const { user, setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()


  if (user.username.length === 0 || user.cars_reviewed === undefined) {
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

    setUser({ username: "", reviews: [] })
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
      <br />
      <p>Userame: {user.username}</p>
      <Bio user={user} onBioChange={onBioChange} errors={errors} />
      <p>Email: {user.email}</p>
      {user.cars_reviewed.length > 0 ? (
        <div>
          <label>Cars that you reviewed</label>
          <ul>
            {user.cars_reviewed.map((car) => {
              return (
                <li key={car}>{car}</li>
              )
            })}
          </ul>
        </div>
      ) 
      : <p>Try leaving a review!</p>}

      <button onClick={onLogout} >Logout</button>
    </div>
  )
}


export default Profile
