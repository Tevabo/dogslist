import React from 'react'
import { Link } from 'react-router-dom'

function DogBreedImages (props) {
    return (
        <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>

        This page will show images of a specific dog breed.
        
        <Link to="/">Go Back to the index</Link>
        </div>
    )
}

export default DogBreedImages