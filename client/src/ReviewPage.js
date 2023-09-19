import React, { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { CarContext } from "./context/car"
import { UserContext } from "./context/user"

function ReviewPage() {


    const [ showReviewForm, setShowReviewForm ] = useState(false)
    const [ showEditForm, setShowEditForm ] = useState(false)
    const [ body, setBody ] = useState("")
    const location = useLocation()
    const carId = location.state
    const { cars, setCars } = useContext(CarContext)
    const { user } = useContext(UserContext)
    const [ errors, setErrors ] = useState(false)

    const car = cars.find((individualCar) => {
        return individualCar.id === carId
    })


    if (car === undefined) {
        return (
            <p>Loading....</p>
        )
    }

    function handleNewReviewSubmit(e) {
        e.preventDefault()

        

        let usernameToSend = ""

        if(user === null) {
            usernameToSend = "Not Specified"
        } else {
            usernameToSend = user.username
        }



        const objToBeSent = {
            car_id: car.id,
            body: body,
            username: usernameToSend
        }

        fetch("/reviews" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) =>{
        
            if(res.ok){
                res.json().then((newReview) => {
                    addNewReview(newReview)
                })
            } else {
                setErrors(true)
            }
        })
    }


    function addNewReview(newReview) {
        setCars(cars => {
            const carIndex = cars.findIndex((car) => {
                return car.id === carId
            })

            cars[carIndex].reviews = [...cars[carIndex].reviews, newReview]
            
            return [...cars]

        })
        setShowReviewForm(false)
    }

    function handleEditSubmit(e, review) {
        e.preventDefault()
        debugger
        fetch(`/reviews/${}`)
    }

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }

    return (
        <div>
            <p>Welcome to the review page!</p>
            <p>{car.year} {car.make} {car.model}</p>
            <img src={car.image} alt={car.make} style={imageDisplay}/>
            <br/>
            {showReviewForm ? (
                <div>
                 <form onSubmit={handleNewReviewSubmit}>
                    <label>Body:</label>
                    <br/>
                    <input onChange={(e) => setBody(e.target.value)} value={body}/>
                    <button type="submit">Submit Review!</button>
                </form>
                <button onClick={() => setShowReviewForm(false)}>Cancel</button> 
                {errors ? (
                    <p>You must be logged in to submit a review</p>
                ) 
                :
                null
                }
                </div>) 
            : 
            <div>
                <button onClick={() => setShowReviewForm(true)}>Add a Review!</button>
            </div>}
            {car.reviews?.map((review) => {

                return (
                   <div>
                        {showEditForm ? (
                            <form onSubmit={() => handleEditSubmit(e, review)}>
                                <p>{review.username}</p>
                                <p><input onChange={(e) => setBody(e.target.value)} value={body} placeholder={review.body}/></p>
                                <button type="submit">Submit Edit</button>
                            </form>
                        )
                        :
                            <div>
                                <p>{review.username}</p>
                                <p>{review.body}</p>
                                <button onClick={() => setShowEditForm(true)}>Edit</button>
                                <button>Delete</button>
                            </div>
                        }
                   </div> 
                )
            })} 
        </div>
    )
}

export default ReviewPage