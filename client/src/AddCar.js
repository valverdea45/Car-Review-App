import React, { useState } from "react";
import { useContext } from "react";
import { CarContext } from "./context/car";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";


function AddCar() {


    const [ year, setYear ] = useState("")
    const [ make, setMake  ] = useState("")
    const [ model, setModel ] = useState("")
    const [ image, setImage ] = useState("")
    const [ errors, setErrors ] = useState(null)
    const { cars, setCars } = useContext(CarContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()

        const yearInInteger = parseInt(year)

        const objToBeSent = {
            year: yearInInteger,
            make: make,
            model: model,
            image: image,
            created_by: user.username
        }

        fetch("/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
            res.json().then((newCar) => {
                setCars([...cars, newCar])
                navigate("/CarList")
            })
            setErrors(null)    
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

        setYear("")
        setMake("")
        setModel("")
        setImage("")

    }

    

    return (
        <div>
            <p>Try adding a car to review!</p>

            <form onSubmit={handleSubmit}>
                <label>Year</label>
                <br/>
                <input onChange={(e) => setYear(e.target.value)} value={year} type="text"/>
                <br/>
                <label>Make</label>
                <br/>
                <input onChange={(e) => setMake(e.target.value)} value={make} type="text"/>
                <br/>
                <label>Model</label>
                <br/>
                <input onChange={(e) => setModel(e.target.value)} value={model} type="text"/>
                <br/>
                <label>Car Image</label>
                <br/>
                <input onChange={(e) => setImage(e.target.value)} value={image} type="text"/>
                <br/>
                <button type="submit">Add Car</button>
                {errors ? (
                    <div>
                        {errors.map((error) => {
                           return (
                            <p key={error}>{error}</p>
                           ) 
                        })} 
                    </div>
                    
                ) : null}
            </form>
        </div>
    )
}

export default AddCar;