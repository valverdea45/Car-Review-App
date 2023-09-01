import React, { useState } from "react"

function SignUp({ onLogin }) {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            username: username,
            password: password
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
                res.json().then((data) => onLogin(data))
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

        setUsername("")
        setPassword("")

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
                <button type="submit">Sign Up</button>
            </form>
            {errors ? (<p>{`${errors}`}</p>) : null}
        </div>
    )
}

export default SignUp