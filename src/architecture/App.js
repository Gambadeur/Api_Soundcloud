import React, { Component } from 'react';
import './App.css';
import Navbar from './home_page/Navbar';
import Cards from './home_page/Cards';

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
