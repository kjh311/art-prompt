import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav';
import axios from 'axios';
import Heading from './components/heading';
import Prompt from './components/prompt';

class App extends Component {
	constructor(){
		super();
		this.state = {
			prompts: []
		}
	}

	componentWillMount(){
		this.getPrompts();
	}

	getPrompts(){
		axios.request({
			method:'get',
			url: 'https://api.mlab.com/api/1/databases/art-promt/collections/prompts?apiKey=myAPIKey'
		});
	}


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
