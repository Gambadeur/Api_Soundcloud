import React, { Component } from 'react';
import './App.css';
import Navbar from './architecture/Navbar';
import Cards from './architecture/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="cardsFlex">
            <Cards/>
        </div>
      </div>
    );
  }
}

export default App;
