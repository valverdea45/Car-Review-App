import React, { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { CarContext } from "./context/car"
import { UserContext } from "./context/user"
import Review from "./Review"

function ReviewsList() {


    const [showReviewForm, setShowReviewForm] = useState(false)
    const [body, setBody] = useState("")
    const location = useLocation()
    const carId = location.state
    const { cars, setCars } = useContext(CarContext)
    const { user, setUser } = useContext(UserContext)
    const [errors, setErrors] = useState([])



    const car = cars?.find((individualCar) => {
        return individualCar.id === carId
    })


    if (car === undefined) {
        return (
            <p>Loading....</p>
        )
    }

    function handleNewReviewSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            car_id: car.id,
            body: body
        }
        
        if(user.id) {
           fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
            .then((res) => {

                if (res.ok) {
                    res.json().then((newReview) => {
                        // adding review to review list
                        addNewReview(newReview)
                    })
                } else {
                    res.json().then((res) => {
                        setErrors(res.errors)
                    })
                }
            }) 
        } else {
            setErrors(["You must be logged in before making any reviews"])
        }
        

        setBody("")

    }

    function updatedReview(editedReview) {


        const newReviews = car.reviews.map((review) => {
            if (review.id === editedReview.id) {
                return editedReview
            } else {
                return review
            }
        })

        car.reviews = newReviews

        const newCarArray = cars.map((oldCar) => {
            if (oldCar.id === car.id) {
                return car
            } else {
                return oldCar
            }
        })

        setCars(newCarArray)

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
        setUser((user) => {

            user.cars_reviewed = [...user.cars_reviewed, `${car.year} ${car.make} ${car.model}`]

            const reviewToBeAdded = car.reviews.find((review) => {
                return review.user_id === user.id
            })

            user.reviews = [...user.reviews, reviewToBeAdded]

            return {
                id: user.id,
                username: user.username,
                email: user.email,
                bio: user.bio,
                cars_reviewed: user.cars_reviewed,
                reviews: user.reviews
            }
        })
    }

    function deleteReview(toBeDeletedReview) {

        const newReviews = car.reviews.filter((review) => {
            return review.id !== toBeDeletedReview.id
        })

        car.reviews = newReviews

        const newCarArray = cars.map((oldCar) => {
            if (oldCar.id === car.id) {
                return car
            } else {
                return oldCar
            }
        })

        setCars(newCarArray)
        setUser((user) => {

            const newRemovedReviewedCarsArray = user.cars_reviewed.filter((individualCar) => {

                let carToBeDeleted = `${car.year} ${car.make} ${car.model}`

                return individualCar.toLowerCase() !== carToBeDeleted.toLowerCase()
            })

            user.cars_reviewed = newRemovedReviewedCarsArray

            const newRemovedReviewArray = user.reviews.filter((review) => {
               return review.id !== toBeDeletedReview.id
            })

            user.reviews = newRemovedReviewArray

            return {
                id: user.id,
                username: user.username,
                email: user.email,
                bio: user.bio,
                cars_reviewed: user.cars_reviewed,
                reviews: user.reviews
            }
        })
    }

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }

    return (
        <div>
            <p>Welcome to the review page!</p>
            <p>{car.year} {car.make} {car.model}</p>
            <img src={car.image} alt={car.make} style={imageDisplay} />
            <br />
            {showReviewForm ? (
                <div>
                    <form onSubmit={handleNewReviewSubmit}>
                        <label>Body:</label>
                        <br />
                        <input onChange={(e) => setBody(e.target.value)} value={body} placeholder="Only honest opinions!" />
                        <button type="submit">Submit Review!</button>
                    </form>
                    <button onClick={() => setShowReviewForm(false)}>Cancel</button>
                    {errors.length > 0 ? (
                        errors.map((error) => {
                            return (
                                <p>{error}</p>
                            )
                        })
                    )
                        : null
                    }
                </div>)
                :
                <div>
                    {
                        user.reviews.map((review) => review.car_id).includes(carId) ?
                            (null)
                            :
                            <button onClick={() => setShowReviewForm(true)}>Add a Review!</button>
                    }
                </div>}
            {car.reviews?.map((review) => {
                debugger
                return (
                    <div>
                        <Review key={review.id} review={review} updatedReview={updatedReview} deleteReview={deleteReview} />
                    </div>
                )
            })}
        </div>
    )
}

export default ReviewsList