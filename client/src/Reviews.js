import React, { useContext, useState } from "react"
import { CarContext } from "./context/car"
import { useNavigate } from "react-router-dom"
import Car from "./Car"

function Reviews() {

    const [ year, setYear ] = useState("")
    const [ make, setMake ] = useState("")
    const [ model, setModel ] = useState("")
    const{ cars } = useContext(CarContext)

    const navigate = useNavigate()
    
 
   function handleSubmit(e) {
    e.preventDefault()

    const integerYear = parseInt(year)

    const carToBeFound = {
        year: integerYear,
        make: make,
        model: model
    }

    navigate("/Car")

    setMake("")
    setModel("")
    setYear("")

   }


   function filterMake(make) {
    
   }

    return (
        <div>
            <p>Welcome to the Reviews page!</p>
            <p>find honest reviews on any car!</p>

            {cars 
            ? 
            (<div>
                <br/>
                <label>Make:</label>
                <input onChange={(e) => setMake(e.target.value)} value={make} type="text"/>
                <br/>
                <label>Model:</label>
                <input onChange={(e) => setModel(e.target.value)} value={model} type="text"/>
                <br/>
                <label>Year:</label>
                <input onChange={(e) => setYear(e.target.value)} value={year} type="text"/>
                <br/>
                <div>
                    <Car/>
                </div>
            </div>)
            : 
            <p>Loading....</p>
            }
           
        </div>
    )
}

// 0
// : 
// {id: 1, year: 2015, make: 'toyota', model: 'corolla', image: null, …}
// 1
// : 
// {id: 2, year: 2020, make: 'honda', model: 'civic', image: null, …}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)

export default Reviews