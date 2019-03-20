import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav';
import Heading from './components/heading';
import Prompt from './components/prompt';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Heading />
       <Prompt />
      </div>
    );
  }
}

export default App;
