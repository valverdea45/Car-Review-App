import React, { useState } from "react"
import { useLocation } from "react-router-dom"

function ReviewPage() {


    const [ showForm, setShowForm ] = useState(false)
    const [ body, setBody ] = useState("")
    const location = useLocation()
    const individualCar = location.state
    const [ car, setCar ] = useState(individualCar)


    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            car_id: car.id,
            body: body
        }

        fetch("/reviews" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) =>{
            debugger
            if(res.ok){
                res.json().then((newReview) => {
                    debugger
                    addNewReview(newReview)
                })
            } else {
                res.json().then((e) => console.log(e.errors))
            }
        })
    }


    function addNewReview(newReview) {
        setCar(car => ({
            ...car,
            reviews: [...car.reviews, newReview]
        }))
        setShowForm(false)
    }


    return (
        <div>
            <p>Welcome to the review page!</p>
            <p>{car.year} {car.make} {car.model}</p>
            <img src={car.image} alt={car.make}/>
            <br/>
            {showForm ? (
                <div>
                 <form onSubmit={handleSubmit}>
                    <label>Body:</label>
                    <br/>
                    <input onChange={(e) => setBody(e.target.value)} value={body}/>
                    <button type="submit">Submit Review!</button>
                </form>
                <button onClick={() => setShowForm(false)}>Cancel</button> 
                </div>) 
            : 
            <div>
                <button onClick={() => setShowForm(true)}>Add a Review!</button>
            </div>}
            {car.reviews?.map((review) => {
                return (
                   <div>
                    <p>{review.user_id}</p>
                    <p>{review.body}</p>
                   </div> 
                )
            })} 
        </div>
    )
}

export default ReviewPage