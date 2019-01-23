import React, { Component } from 'react'
// import * as request from 'superagent'
// import DogsListContainer from './DogsListContainer'
import { Link } from 'react-router-dom'


class DogsList extends Component {   
    renderDogBreed(breed) {
        return <li key={breed}>
            <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
            </li>
      }
    
      render() {
        const { dogBreeds } = this.props
        return (
          <div className="dogs-list">
            <h1>Dogs List</h1>
    
            { !dogBreeds && 'Loading...' }
    
            {
              dogBreeds &&
              <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
            }
          </div>
        )
      }
}

export default DogsList