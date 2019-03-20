import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Heading from './components/heading';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Heading />
        
      </div>
    );
  }
}

export default App;
