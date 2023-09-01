
import React, { useState, useEffect } from "react"
const UserContext = React.createContext()

function userProvider({ children }) {

    const [ user, setUser ] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:3000/me")
    }, [])

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}