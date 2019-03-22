import React, { Component } from 'react';
import './prompt.scss';
// import Nav from './components/nav';
import PropTypes from 'prop-types';



 

class Prompt extends Component {

	constructor(props){
		super(props);
		this.promptcontent = props.promptcontent;
		this.promptid = props.promptid;

		this.state = {
	      subjectPrompts: [
	      	{ id: 1, promptcontent: "Prompt 1 here!" },
	      	{ id: 2, promptcontent: "Prompt 2 here!" }
	      ],
	      newSubjectContent: '',
	      
	    };
	    this.handleNewSubject = this.handleNewSubject.bind(this);
	    this.writeSubject = this.writeSubject.bind(this);
	}




//when the input changes, set new subject content
	handleNewSubject(e){
		console.log(this)
		this.setState({
			newSubjectContent: e.target.value, //value of text input
		})
	}



	writeSubject(){

		//call a method that sets the promtcontent for a prompt to
		// the value of the input 
		

		this.props.addSubject(this.state.newSubjectContent);

		//set newSubjectContent back to empty string
		this.setState({
			newSubjectContent: '', 
		})

		console.log(this.state.newSubjectContent)
	}

	// componentDidMount(){
 //     this.populateSubjectDropDown();
 //     this.populateVerbDropDown();




	// }

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
				    <label htmlFor="verbDropDown">Subject</label>
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