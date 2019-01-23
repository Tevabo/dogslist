import React from 'react'
import { Link } from 'react-router-dom'

function DogBreedImages (props) {
    const { images, breed } = props
    return (
        <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>
            This page will show images of the { breed } breed.
        
        <Link to="/">Go Back to the index</Link>
            <div>
                { images && images.map(url => <img key={url}src={ url } alt="Dog" />) }
                { !images && 'Loading...' }
            </div>
        </div>
    )
}

export default DogBreedImages