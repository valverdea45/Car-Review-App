import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarContext } from "./context/car"
import { UserContext } from "./context/user"
import Car from "./Car"

function CarList() {

    const [ year, setYear ] = useState("")
    const [ make, setMake ] = useState("")
    const [ model, setModel ] = useState("")
    const { cars } = useContext(CarContext)
    const { user } = useContext(UserContext)

    const carsToDisplay = cars.filter((car) => {

        let makeUserInputLength = make.length > 0
        let modelUserInputLength = model.length > 0
        let yearUserInputLength = year.length > 0

        let correctMake = car.make.toLowerCase().includes(make.toLowerCase())
        let correctModel = car.model.toLowerCase().includes(model.toLowerCase())
        let correctYear = `${car.year}`.includes(year)

        // ! inverts the false statment into a true 
        // || if one or both values are true return true
        // && returns true only if both values are true 
        // () solve for whatever is within parentheses first

        // example: user inputs "T" into make input field and nothing into model or year
        // if user inputs the letter T then !makeUserInputLength will be false
        // the length of "T" is 1
        // makeUserInputLength = "T".length > 0
        // makeUserInputLength = 1 > 0 (returns true)
        // !makeUserInputLength = 1 > 0 (returns false becuase of !)
        // (false || correctMake)
        // correctMake = allCarMakes.includes(userInput)
        // if the letter T matches any car's make correctMake will return true
        // T is INCLUDED in Toyota thus correctMake returns true
        // correctMake = "Toyota".includes("T") (this returns true)
        // (false || true)
        // since there is one truthy value within the || (or) statement the whole () becomes true
        // (true) && (!modelUserInputLength || correctModel) && (!yearUserInputLength || correctYear)
        // user didnt input anything into model
        // modelUserInputLength = 0 > 0 (returns false)
        // !modelUserInputLength = 0 > 0 (returns true)
        // (true) && (true || correctModel) && (!yearUserInputLength || correctYear)
        // correctModel = allCarModels.includes(userInput)
        // correctModel = allCarModels.includes("") (returns false)
        // since no car models match "" correctModel is false
        // (true) && (true || false) && (!yearUserInputLength || correctYear)
        // since there is one truthy value in our || statement this () becomes true
        // (true) && (true) && (!yearUserInputLength || correctYear)
        // we apply the same logic to the year input
        // return (true) && (true) && (true)
        // now the filter will return any car that has a make that has the letter "T" included and not worry about the year or model


        return (!makeUserInputLength || correctMake) && (!modelUserInputLength || correctModel) && (!yearUserInputLength || correctYear) 
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

                {carsToDisplay.length === 0 && user.username.length === 0 ? (
                <div>
                    <p>Didn't find what your looking for?</p>
                    <p>try <Link to="/LogIn">logging in</Link> and adding the car!</p>
                </div>) 
                : 
                carsToDisplay.length === 0 && user.username.length > 0 ? (
                    <div>
                        <p>Didn't find what your looking for?</p>
                        <p>try <Link to="/AddCar">adding a car!</Link></p>
                    </div>
                ) :
                carsToDisplay.map((car) => {
                   return <Car key={car.id} car={car}/>
                })
                }
                
            </div>
           
        </div>
    )
}

export default CarList