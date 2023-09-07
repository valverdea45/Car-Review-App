import { useContext } from "react";
import { UserContext } from "./context/user";

export function Home() {
    
    const { user } = useContext(UserContext)

    
    return (
        <div>
            {user ? 
            (<h1>{`Welcome! ${user.username} to the #1 car review website!`}</h1>) 
            : <h1>Welcome to the #1 car review website!!</h1>}
        </div>
    )
}

export default Home;