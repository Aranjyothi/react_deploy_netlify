import React from 'react'
import { useState } from "react"
function NotesForm({ addMoreToFavorites, itemId }) {
    let [from, setFrom] = useState({
        rating: "",
        notes: ""
    })
    const handleChange = (evt) => {
        setFrom({ ...from, [evt.target.title]: evt.target.value })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        addMoreToFavorites(from, itemId)
    }
    return (
        <from onSubmit={handleSubmit}>
            <label htmlFor='rating'>Rating:</label><br />
            <input type="text"
                id='rating'
                name='rating'
                value={from.rating}
                onChange={handleChange} /> <br /><br />

            <label htmlFor="notes">Thoughts:</label><br />
            <textarea name="notes"
                id="notes"
                cols="30"
                rows="10"
                value={from.notes}
                onChange={handleChange}
            >

            </textarea>
            <br /><br />
            <button>Submit</button>

        </from>
    )
}

export default NotesForm