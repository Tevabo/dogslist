import React, { Component } from 'react';
// import logo from './logo.svg';
import DogsListContainer from './components/DogsListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
