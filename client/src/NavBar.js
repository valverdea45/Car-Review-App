import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "./context/user";

function NavBar() {

    const { user } = useContext(UserContext)


    return (
        <div>
            { user.id ? (
            <div>
            <NavLink exact to="/AddCar">
                Add Car
            </NavLink>
            <br/>
            <NavLink exact to="/Profile">
                Profile
            </NavLink>
            <br/>
            <NavLink exact to="/CarList">
                Reviews
            </NavLink>
            </div>
            ) : 
           <div>
            <NavLink exact to="/CarList">
                Reviews
            </NavLink>
            <br/>
            <NavLink exact to="/LogIn">
                Log In
            </NavLink>
            <br/>
            <NavLink exact to="/SignUp">
                Sign Up
            </NavLink>
            </div> 
            }
            
        </div>
    )
}

export default NavBar;


