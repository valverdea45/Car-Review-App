import React from "react"

function Car({ carsToDisplay }) {


    return (
        <div>
            {carsToDisplay.map((car) => {
                return (
                <div>
                    <p>{car.year}</p>
                    <p>{car.make}</p> 
                    <p>{car.model}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Car;
