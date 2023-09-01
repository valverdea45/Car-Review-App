import { NavLink } from "react-router-dom"

function NavBar({ user }) {

    


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


