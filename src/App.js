import React, { Component } from 'react';
// import logo from './logo.svg';
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImages} />
        </main>
      </div>
    );
  }
}

export default App;
