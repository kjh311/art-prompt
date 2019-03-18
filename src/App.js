import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <h1>Welcome to Art Prompt!</h1>  
      </div>
    );
  }
}

export default App;
