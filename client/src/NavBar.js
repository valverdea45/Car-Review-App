import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "./context/user";

function NavBar() {

    const { user } = useContext(UserContext)


    return (
        <div>
            { user ? (
            <div>
            <NavLink exact to="/CarList">
                Car List
            </NavLink>
            <br/>
            <NavLink exact to="/Profile">
                Profile
            </NavLink>
            <br/>
            <NavLink exact to="/MyReviews">
                My Reviews
            </NavLink>
            </div>
            ) : 
           <div>
            <NavLink exact to="/CarList">
                Car List
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


