import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav';
// import axios from 'axios';
import Heading from './components/heading';
import Prompt from './components/prompt';
// import firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);
    // this.addSubject = this.addSubject.bind(this);
    // this.ref = firebase.firestore().collection('boards');
    // this.unsubscribe = null;
    // this.state = {
    //   subjectPrompts: [
    //   	{ id: 1, promptcontent: "Prompt 1 here!" },
    //   	{ id: 2, promptcontent: "Prompt 2 here!" }
    //   ]
    // }


  }

	componentWillMount(){
		// this.getPrompts();
		// var REACT_APP_API_KEY = process.env.REACT_APP_API_KEY,
		// // MLAB_API_KEY = process.env.REACT_APP_MLAB_API_KEY,
		// REACT_APP_AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN,       
		// REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL,         
		// REACT_APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID,         
		// REACT_APP_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET,               
		// REACT_APP_MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;               
		// console.log("API KEY: " + REACT_APP_API_KEY)
		// console.log("AUTH DOMAIN: " + REACT_APP_AUTH_DOMAIN)
		// console.log("DATABASE URL: " +REACT_APP_DATABASE_URL)
		// console.log("PRJOJECT ID: " +REACT_APP_PROJECT_ID)
		// console.log("STORAGE BUCKET: " + REACT_APP_STORAGE_BUCKET)
		// console.log("SENDER ID: " + REACT_APP_MESSAGING_SENDER_ID)
		// console.log(firebase)
	
	}


// curl -H "Origin: https://example.local" \
//   -H "Access-Control-Request-Method: POST" \
//   -H "Access-Control-Request-Headers: X-Requested-With" \
//   -X OPTIONS -D - -o /dev/null\
//   -x http://localhost:3000/\
//   https://example.com

// 	const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

	// getPrompts(){
	// 	var MLAB_API_KEY = process.env.REACT_APP_MLAB_API_KEY;

	// 	axios.request({
	// 		method:'get',
	// 		url: 'https://api.mlab.com/api/1/databases/product-catalog/collections/products?apiKey='
	// 		// url: 'https://api.mlab.com/api/1/databases?apiKey=MLAB_API_KEY'
	// 	}).then((response) => {
	// 		this.setState({prompts: response.data}, () => {
	// 			console.log(this.state)
	// 		});
	// 	}).catch((error) => {
	// 		console.log(error)
	// 	});
	// }

	 // getPrompts(){
	 // 	var REACT_APP_MLAB_API_KEY = process.env.REACT_APP_MLAB_API_KEY;




	    // axios.request({
	    //   method:'get',
	    //   url:'https://api.mlab.com/api/1/databases/art-promt/collections/prompts?apiKey=MLAB_API_KEY',
	    //         headers: {
	    //                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	    //   }}).then((response) => {
	    //   this.setState({tasks: response.data}, () => {
	    //     console.log(this.state);
	    //   });
	    // }).catch((error) => {
	    //   console.log(error);
	    // });



	 //    axios.get('https://api.mlab.com/api/1/databases?apiKey=REACT_APP_MLAB_API_KEY',  {
  //       headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //       }}).then(response => { 
		// 	console.log(response)
		// }).catch(error => {
		//     console.log(error.response)
		// });


	 //  }

// addSubject(subjectPrompt){
// 	console.log(this.state.subjectPrompts[2])
// 	console.log("addSubject() fired")

// 	//push the 
// 	const previousSubjectPrompts = this.state.subjectPrompts;
// 	previousSubjectPrompts.push({ id: previousSubjectPrompts.length + 1, promptcontent: subjectPrompt });
// 	this.setState({
// 		subjectPrompts: previousSubjectPrompts,
// 	})

// 		console.log(this.state.subjectPrompts[2])
// 		console.log(previousSubjectPrompts[2])

// }

  render() {
    return (
      <div className="App">
	      <Nav />
	      <Heading />
		  <Prompt  />       
	  {/*<Prompt addSubject={this.addSubject} />       */}
      </div>
    );
  }
}

export default App;
