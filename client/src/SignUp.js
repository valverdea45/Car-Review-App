import React, { useState, useContext } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"


function SignUp() {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ errors, setErrors ] = useState(null)
    const { setUser } = useContext(UserContext)
    
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            username: username,
            password: password,
            email: email
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
                res.json().then((data) => {
                    setUser(data)
                    navigate("/")
                })
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

        setUsername("")
        setPassword("")
        setEmail("")

    }

    return (
        <div>
            <h3> All makes and models with HONEST reviews in one place! </h3>

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <br/>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
                <br/>
                <label>Password</label>
                <br/>
                <input onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <label>Email</label>
                <br/>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text"/>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            {errors ? (<p>{`${errors}`}</p>) : null}
        </div>
    )
}

export default SignUp