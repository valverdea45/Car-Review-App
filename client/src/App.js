import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home"
import CarList from "./CarList"
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import React, { useState } from "react"
import SignUp from "./SignUp";
import Profile from "./Profile";
import MyReviews from "./MyReviews";

function App() {

  const [ user, setUser ] = useState(null)

  const navigate = useNavigate()

  function onLogin(user) {
    console.log(user)
    setUser(user)
    navigate("/")
  }

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


  return (
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route path="/CarList" element={<CarList/>}/>
        <Route path="/LogIn" element={<LogIn onLogin={onLogin}/>}/>
        <Route path="/SignUp" element={<SignUp onLogin={onLogin}/>}/>
        <Route path="/Profile" element={<Profile onLogout={onLogout}/>}/>
        <Route path="/MyReviews" element={<MyReviews/>}/>
        <Route path="/" element={<Home user={user}/>}/>
      </Routes>
    </div>
  )
}

export default App;
