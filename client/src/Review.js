import React, { useState } from "react";

function Review({ review, updatedReview }) {

    const [ showEditForm, setShowEditForm ] = useState(false)
    const [ body, setBody ] = useState(review.body)
    const [ errors, setErrors ] = useState(null)

    function handleEditSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            body: body
        }
        
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
                res.json().then((editedReview) => {
                    setShowEditForm(false) 
                    updatedReview(editedReview)
                })
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })
    }

    return (
        <div>
        {showEditForm ? (
                        <form onSubmit={handleEditSubmit}>
                            <p>{review.username}</p>
                            <input onChange={(e) => setBody(e.target.value)} value={body}/>
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
}

export default Review