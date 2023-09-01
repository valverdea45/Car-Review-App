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


  return (
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route path="/CarList" element={<CarList/>}/>
        <Route path="/LogIn" element={<LogIn onLogin={onLogin}/>}/>
        <Route path="/SignUp" element={<SignUp onLogin={onLogin}/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route exact path="/MyReviews">
          <MyReviews/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Routes>
    </div>
  )
}

//  <Navbar />
//     <div className="box"/>
//     <ClickMe/>
//       <Switch>
//         <Route exact path="/CaughtPokemon">
//           <CaughtPokemon caughtPokemon={caughtPokemon} />
//         </Route>
//         <Route exact path="/UncaughtPokemon">
//           <UncaughtPokemon uncaughtPokemon={uncaughtPokemon} />
//         </Route>
//         <Route exact path="/WildPokemon">
//           <WildPokemon uncaughtPokemon={uncaughtPokemon} handleUpdatePokemon={handleUpdatePokemon}/>
//         </Route>
//         <Route exact path="/AddPokemon">
//           <AddPokemon onAddPokemon={onAddPokemon} />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </UpdateFunctionContext.Provider>

export default App;
