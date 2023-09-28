import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
import { CarContext } from "./context/car"

function Profile() {

  const { user, setUser } = useContext(UserContext)
  const { cars } = useContext(CarContext)
  const [ userCars, setUserCars ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/users")
    .then((data) => data.json())
    .then((allCars) => setUserCars(allCars))
  }, [])


  if((user === null && userCars.length === 0) || (user === null) || (userCars.length === 0)) {
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
            <label>Cars that you added</label>
            <ul>
            {userCars.map((car) => {
              return (
                
                <li>{car.year} {car.make} {car.model}</li>
      
              )
            })}
            </ul>
            <button onClick={onLogout} >Logout</button>
        </div>
    )
}

// {id: 3, username: 'Valverdea45', email: null, bio: null}

export default Profile