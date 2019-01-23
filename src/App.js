import React, { Component } from 'react';
// import logo from './logo.svg';
import DogsList from './components/DogsList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogsList />
        </main>
      </div>
    );
  }
}

export default App;
