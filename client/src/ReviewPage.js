import React from "react"
import { useLocation } from "react-router-dom"

function ReviewPage() {

    const location = useLocation()
    const car = location.state

    console.log(car)

    return (
        <div>
            <p>Welcome to the review page!</p>
            <p>{car.year} {car.make} {car.model}</p>
            <img src={car.image} alt={car.make}/>
            {car.reviews.map((review) => {
                console.log(review)
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