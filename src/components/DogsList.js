import React, { Component } from 'react'
import * as request from 'superagent'
import DogsListContainer from './DogsListContainer'

class DogsList extends Component {    
    render() {
        const { dogBreeds } = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {dogBreeds === null ? 'Loading...' : <ul>
                    {dogBreeds.map(breed => <li key={breed}>{breed}</li>)}
                </ul>}
            </div>
        )
    }
}

export default DogsList