
import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [ user, setUser ] = useState(null)
    
    useEffect(() => {
        fetch("/me")
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => setUser(data))
            } else {
                res.json().then(() => setUser(null))
            }
        })
    }, [])

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }