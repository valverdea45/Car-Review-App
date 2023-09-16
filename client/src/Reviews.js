import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarContext } from "./context/car"
import { UserContext } from "./context/user"
import Car from "./Car"

function Reviews() {

    const [ year, setYear ] = useState("")
    const [ make, setMake ] = useState("")
    const [ model, setModel ] = useState("")
    const { cars } = useContext(CarContext)
    const { user } = useContext(UserContext)


    const carsToDisplay = cars.filter((car) => {



        // what I need from the filter: 
        // if all input fields are empty show all cars
        // test length of input fields(make.length > 0) then reverse(!) to true
        // !make.length > 0 
        // if ALL input fields are empty
        // (!make.length > 0) && (!model.length > 0) && (!year.length > 0)
        // if one input field is filled with full year/make/model or half way filled return the closest match
        // if two input fields are filled or half way filled return the closest match 


        let makeSet = make.length > 0
        let modelSet = model.length > 0
        let yearSet = year.length > 0



        let correctMake = car.make.toLowerCase().includes(make.toLowerCase())
        let correctModel = car.model.toLowerCase().includes(model.toLowerCase())
        let correctYear = `${car.year}`.includes(year)

        // ! inverts the false statment into a true 
        // || if one or both statments are true return true
        // && returns true if both statments are true 

        // if make length is 0 its false but the ! makes it true thus making the whole || statement true
        // (!makeSet || correctMake)
        // same concept 
        // (!modelSet || correctModel)
        // if both || statements come out to be true then the && returns true
        //                            true
        // (!makeSet || correctMake) && (!modelSet || correctModel)
        //                           true                              same concept testing if true
        // (!makeSet || correctMake) && (!modelSet || correctModel) && (!yearSet || correctYear)

        return (!makeSet || correctMake) && (!modelSet || correctModel) && (!yearSet || correctYear) 
        })



    return (
        <div>
            <h1>Welcome to the Reviews page!</h1>
            <p>find honest reviews on any car!</p>

        <div>
        </div>
            <div>
                <div>
                <label>Make:</label>
                <input onChange={(e) => setMake(e.target.value)} value={make} type="text"/>
                <label>Model:</label>
                <input onChange={(e) => setModel(e.target.value)} value={model} type="text"/>
                <label>Year:</label>
                <input onChange={(e) => setYear(e.target.value)} value={year} type="text"/>
                </div>

                {carsToDisplay.length === 0 && user === null ? (
                <div>
                    <p>Didn't find what your looking for?</p>
                    <p>try <Link to="/LogIn">logging in</Link> and adding the car!</p>
                </div>) 
                : 
                carsToDisplay.length === 0 && typeof user === 'object' ? (
                    <div>
                        <p>Didn't find what your looking for?</p>
                        <p>try <Link to="/AddCar">adding a car!</Link></p>
                    </div>
                ) :
                <Car carsToDisplay={carsToDisplay}/>
                }
                
            </div>
           
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