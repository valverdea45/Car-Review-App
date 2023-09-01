import React, { useState } from "react"

function LogIn({ onLogin }) {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            username: username,
            password: password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
                res.json().then((user) => onLogin(user))
                setErrors(null)
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

        setUsername("")
        setPassword("")

    }

    return (
        <div>
            <h3>Try logging In!</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <br/>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
                <br/>
                <label>Password</label>
                <br/>
                <input onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit">Log In</button>
            </form>
            {errors ? (<p>{`${errors}`}</p>) : null}
        </div>
    )
}

export default LogIn;


// </form>
// {isInvalidInput ? (
//     <p>Oops - don't forget to fill out all fields above</p>
// ) : null}
// <p>note: when adding a pokemon it gives it a chance to be found in the wild</p>
// </div>
// )
// }
