import { NavLink } from "react-router-dom"

function NavBar() {




    return (
        <div>
            <NavLink exact to="/CarList">
                Car List
            </NavLink>
            <NavLink exact to="/LogIn">
                Log In
            </NavLink>
        </div>
    )
}

export default NavBar;

// function Navbar() {
//     return (
//         <div>
//             <NavLink to="/CaughtPokemon" exact style={linkStyles} activeStyle={{ background: "darkblue" }}>
//                 Caught Pokemon
//             </NavLink>
//             <NavLink to="/UncaughtPokemon"exact style={linkStyles} activeStyle={{ background: "darkblue" }}>
//                 Uncaught Pokemon
//             </NavLink>
//             <NavLink to="/WildPokemon" exact style={linkStyles} activeStyle={{ background: "darkblue" }}>
//                 Wild Pokemon
//             </NavLink>
//             <NavLink to="/AddPokemon" exact style={linkStyles} activeStyle={{Background: "darkblue" }}>
//                 Add Pokemon
//             </NavLink>
//         </div>
//     )
// }
