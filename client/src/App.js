import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import CarList from "./CarList"
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import SignUp from "./SignUp";
import Profile from "./Profile";
import MyReviews from "./MyReviews";

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/CarList" element={<CarList/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/MyReviews" element={<MyReviews/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
