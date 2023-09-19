import React from "react"
import { useNavigate } from "react-router-dom"

function Car({ carsToDisplay }) {

//     const carDisplayStyle = {
//         margin: "1rem",
//         padding: "1rem",
//         borderRadius: "10px",
//         boxShadow: "10px 10px black",
//         background: "#f9f9f0"
//   }

const imageDisplay = {
    height: "15rem",
    width: "22rem"
}

const navigate = useNavigate()

function handleClick(car) {
    navigate("/ReviewPage", {state: car.id})
}

    console.log(carsToDisplay)
    

    return (
        <div>
            {carsToDisplay.map((car) => {
                return (
                <div>
                    <br/>
                    <p>{car.year} {car.make} {car.model}</p>
                    <img src={car.image} alt={car.make} style={imageDisplay}/>
                    <br/>
                    <button onClick={() => handleClick(car)}> Reviews </button>
                </div>
                )
            })}
        </div>
    )
}

export default Car;
