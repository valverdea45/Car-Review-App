import React, { useContext } from "react"
import { CarContext } from "./context/car";

function Car() {

    const { cars } = useContext(CarContext)


    if (cars === null) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            {cars.map((car) => {
                return (
                <div>
                    <br/>
                    <h3>{car.year}</h3>
                    <h3>{car.make}</h3> 
                    <h3>{car.model}</h3>
                    <br/>
                </div>
                )
            })}
        </div>
    )
}

export default Car;
