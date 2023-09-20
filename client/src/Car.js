import React from "react"
import { useNavigate } from "react-router-dom"

function Car({ car }) {

const imageDisplay = {
    height: "15rem",
    width: "22rem"
}

const navigate = useNavigate()

function handleClick(car) {
    navigate("/ReviewsList", {state: car.id})
}

    

    return (
        <div>
            <div>
                <br/>
                <p>{car.year} {car.make} {car.model}</p>
                <img src={car.image} alt={car.make} style={imageDisplay}/>
                <br/>
                <button onClick={() => handleClick(car)}> Reviews </button>
            </div>
        </div>
    )
}

export default Car;
