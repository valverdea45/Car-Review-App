import React from "react"

function Car({ carsToDisplay }) {
    
//     const carDisplayStyle = {
//         margin: "1rem",
//         padding: "1rem",
//         borderRadius: "10px",
//         boxShadow: "10px 10px black",
//         background: "#f9f9f0"
//   }


    return (
        <div>
            {carsToDisplay.map((car) => {
                return (
                <div>
                    <br/>
                    <p>{car.year} {car.make} {car.model}</p>
                    <img src={car.image} alt="Car" />
                </div>
                )
            })}
        </div>
    )
}

export default Car;
