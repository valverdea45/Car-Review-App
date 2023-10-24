import React, { useState } from "react"

function Bio({ user, onBioChange, errors }) {

    const [bio, setBio] = useState(user.bio)
    const [showBio, setShowBio] = useState(true)
    const [showBioForm, setShowBioForm] = useState(false)

    

    return (
        <div>
            {bio ? 
            <div>
                {showBio ? 
                <p>Bio: {bio} <button onClick={() => {
                    setShowBio(false)
                    setShowBioForm(true)
                }}>Edit</button></p> 
                : null}
            </div>
            :
            showBio ? (
                <div>
                    <button onClick={() => {
                        setShowBioForm(true)
                        setShowBio(false)
                    }}>Add Bio!</button>
                </div>
            ) : null}

            {showBioForm ? (
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        onBioChange(bio)
                        setShowBioForm(false)
                        setShowBio(true)
                    }}>
                        <input onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Add a bio!"/>
                        <button type="submit">Submit</button>
                        <button onClick={() => {
                            setShowBioForm(false)
                            setShowBio(true)
                        }}>Cancel</button>
                    </form>
                    {errors.length > 0 ? (
                        errors.map((error) => {
                            return (
                                <p>{error}</p>
                            )
                        })
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

export default Bio