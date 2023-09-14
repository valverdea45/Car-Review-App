import React, { useState, useEffect } from "react"

const CarContext = React.createContext()

function CarProvider({ children }) {
    const [ cars, setCars ] = useState([])

    useEffect(() => {
        fetch("/cars")
        .then((data) => data.json())
        .then((allCars) => setCars(allCars))
    }, [])

    return <CarContext.Provider value={{ cars, setCars }}>{children}</CarContext.Provider>
}

export { CarContext, CarProvider }