import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";

function Review({ review, updatedReview, deleteReview }) {

    const [ showEditForm, setShowEditForm ] = useState(false)
    const [ body, setBody ] = useState(review.body)
    const [ editErrors, setEditErrors ] = useState([])
    const { user } = useContext(UserContext)

    

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
            if (res.ok) {
                res.json().then((editedReview) => {
                    setShowEditForm(false)
                    updatedReview(editedReview)
                    setEditErrors([])
                })
            } else {
                res.json().then((res) => {
                    setEditErrors(res.errors)
                })
            }
        })
    }

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((toBeDeletedReview) => deleteReview(toBeDeletedReview))
    } 

    return (
        <div>
        {showEditForm ? (
                    <div>
                        <form onSubmit={handleEditSubmit}>
                            <p>{user.username}</p>
                            <input onChange={(e) => setBody(e.target.value)} value={body}/>
                            <button type="submit">Submit Edit</button>
                            <br/>
                            <button onClick={() => setShowEditForm(false)}>Cancel</button>
                        </form>
                        {editErrors.length > 0 ? (
                            editErrors.map((error) => {
                                return (
                                    <p key={error}>{error}</p>
                                )
                            })
                        )
                        : null
                        }
                    </div>
                    )
                    :
                        <div>
                            <p>{review.username}</p>
                            <p>{review.body}</p>
                            { user === null ? (
                                null
                            ) : user.id === review.user_id ? (
                                <div>
                                <button onClick={() => setShowEditForm(true)}>Edit</button>
                                <button onClick={handleDeleteClick}>Delete</button>  
                                </div>
                            ) : null}
                        </div>
                    } 
        </div>



    )
}

export default Review