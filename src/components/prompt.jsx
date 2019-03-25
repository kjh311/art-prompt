import React, { Component } from 'react';
import './prompt.scss';
// import Nav from './components/nav';
import PropTypes from 'prop-types';
// import App from '../App'
import { DB_CONFIG } from '../config';
import firebase from 'firebase';
import 'firebase/database';




 

class Prompt extends Component {



	constructor(props){
		super(props);

		this.promptcontent = props.promptcontent;
		this.promptid = props.promptid;



		this.app = firebase.initializeApp(DB_CONFIG);





		this.db = this.app.database().ref().child('subjectPrompts');

		this.state = {
	      subjectPrompts: [],
	      newSubjectContent: '',
	    };

	    this.handleNewSubject = this.handleNewSubject.bind(this);
	    this.writeSubject = this.writeSubject.bind(this);
	    this.addSubject = this.addSubject.bind(this);
	}



	//get info from DB
	componentWillMount(){

		console.log("firebase length " + firebase.apps.length)
		const previousSubjectPrompts = this.state.subjectPrompts;

	// data snapshot
		this.db.on('child_added', snap => {
			previousSubjectPrompts.push({
				id: snap.key,
				newSubjectContent: snap.val().newSubjectContent,
			})

			this.setState({
				subjectPrompts: previousSubjectPrompts
			})
		})
	}

	// componentDidMount(){
 //     this.populateSubjectDropDown();
 //     this.populateVerbDropDown();
	// }


// Add new subject to state
addSubject(subjectPrompt){


	// push subject prompt to state
	// const previousSubjectPrompts = this.state.subjectPrompts;
	// previousSubjectPrompts.push({ id: previousSubjectPrompts.length + 1, promptcontent: subjectPrompt });
	// this.setState({
	// 	subjectPrompts: previousSubjectPrompts,
	// })


	this.db.push().set({ newSubjectContent: subjectPrompt });

}



//when the input changes, set new subject content
	handleNewSubject(e){
		// console.log("HandleNewSubject() fired " + e.target.value)
		this.setState({
			newSubjectContent: e.target.value, //value of text input
		})

		// console.log(this.state.subjectPrompts)
	}



	writeSubject(){
		// console.log("writeSubject() fired")
		//call a method that sets the promtcontent for a prompt to
		// the value of the input 
		

		this.addSubject(this.state.newSubjectContent);

		//set newSubjectContent back to empty string
		this.setState({
			newSubjectContent: '', 
		})

		// console.log("newSubjectContent = " + this.state.newSubjectContent)
	}



	// populateSubjectDropDown = () => {
	// 	let subjectArray = new Array("A cyborg" , "A dancing chicken ", "A flying whale ", "A rabid chipmunk ", "A tapdancing elephant ");

	// 	let dropdown = document.getElementById("subjectDropDown");

	// 	// Loop through the array
	// 	for (let i = 0; i < subjectArray.length; ++i) {
 //  		  // Append the element to the end of Array list
 //  		  dropdown[dropdown.length] = new Option(subjectArray[i], subjectArray[i]);
	// 	}
	//  };

	//  populateVerbDropDown = () => {
	// 	let verbArray = new Array("riding a Harley Davidson ", "weilding a katana sword ", "packing an uzi ", "riding a racing snail ", "walking a crocodile on a leash ");
	// 	let dropdown = document.getElementById("verbDropDown");
	// 	for (let i = 0; i < verbArray.length; ++i) {
 //  		  dropdown[dropdown.length] = new Option(verbArray[i], verbArray[i]);
	// 	}
	//  };

	//  randomizePrompt = () => {
	//  	let subjectArray = new Array("A cyborg" , "A dancing chicken ", "A flying whale ", "A rabid chipmunk ", "A tapdancing elephant ");
	//  	let verbArray = new Array("riding a Harley Davidson ", "weilding a katana sword ", "packing an uzi ", "riding a racing snail ", "walking a crocodile on a leash ");
	//  	var randSubject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
	//  	var randVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
	//  	document.getElementById("promptText").innerHTML = randSubject + " " + randVerb;
	//  	// alert(rand)
	//  }


  render(props) {

    return (

      <div className="prompt container">
      <p className="promptcontent">{this.promptcontent}</p>


	<form className="row">
			<div className="col-12 prompt-select subjectDropDownDiv">
				  <div className="form-group">
				    <label htmlFor="subjectDropDown">Subject</label>


					<select className="form-control " id="subjectDropDown">
	      			  {
	      			  	this.state.subjectPrompts.map((prompt) => {
	      			  		return (
	      			  	<option promptcontent={prompt.promptcontent} promptid={prompt.id} key={prompt.id}>{prompt.promptcontent}</option>
	      			  	)
	      			  })
	      			  }
	      			</select>

	      			<div className="subjectInputDiv">
	      				<input className="subjectInput"
	      				placeholder="Add a new subject"
	      				value={this.state.newSubjectContent} 
	      				onChange={this.handleNewSubject} />
	      				<button className="writeSubjectButton"
	      				onClick={this.writeSubject}>Add Subject</button>
	      			</div>

				  </div>
	  		</div>

	  		<div className="col-12 prompt-select verbDropDownDiv">
				  <div className="form-group">
				    <label htmlFor="verbDropDown">Verb</label>
				    <select className="form-control " id="verbDropDown">
				    	<option>Random</option>
				    </select>
				  </div>
	  		</div>

	  		<div className="col-12 prompt-select">
			   
				  <div className="form-group">
				    <label htmlFor="exampleFormControlSelect3">Object</label>
				    <select className="form-control" id="exampleFormControlSelect3">
				      <option>Random</option>
				      <option>an evil elephant.</option>
				      <option>a rabbid chipmunk.</option>
				      <option>an undead zombie.</option>
				      <option>a demon.</option>
				    </select>
				  </div>
				
	  		</div>

	  		<div className="col-12 prompt-select">
	  		   
				  <div className="form-group">
				    <label htmlFor="exampleFormControlSelect4">Style</label>
				    <select className="form-control" id="exampleFormControlSelect4">
				      <option>Random</option>
				      <option>Drawn with colored pencil</option>
				      <option>With Acrylic paints</option>
				      <option>With Pencil</option>
				      <option>In a Cartoon style</option>
				      <option>With Oil Paints</option>
				      <option>With Gaouche Paints</option>
				      <option>With watercolor paints</option>
				      <option>In a Noir Style</option>
				      <option>At sunset</option>
				      <option>With Ink and Wash</option>
				      <option>In an Anime style</option>
				    </select>
				  </div>

				  <button type="button" className="btn btn-primary randomize-button" onClick={this.randomizePrompt}>Randomize</button>

				  <h2 id="promptText" className="promptText"></h2>
				
	  		</div>
		</form>

		


	  </div>
    );
  }
}

Prompt.propTypes = {
			promptcontent: PropTypes.string
		}

export default Prompt;