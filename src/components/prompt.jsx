import React, { Component } from 'react';
import './prompt.scss';
// import Nav from './components/nav';



 

class Prompt extends Component {

	componentDidMount(){
     this.populateSubjectDropDown();
     this.populateVerbDropDown();
	}

	populateSubjectDropDown = () => {
		let subjectArray = new Array("A cyborg" , "A dancing chicken ", "A flying whale ", "A rabid chipmunk ", "A tapdancing elephant ");

		let dropdown = document.getElementById("subjectDropDown");

		// Loop through the array
		for (let i = 0; i < subjectArray.length; ++i) {
  		  // Append the element to the end of Array list
  		  dropdown[dropdown.length] = new Option(subjectArray[i], subjectArray[i]);
		}
	 };

	 populateVerbDropDown = () => {
		let verbArray = new Array("riding a Harley Davidson ", "weilding a katana sword ", "packing an uzi ", "riding a racing snail ", "walking a crocodile on a leash ");
		let dropdown = document.getElementById("verbDropDown");
		for (let i = 0; i < verbArray.length; ++i) {
  		  dropdown[dropdown.length] = new Option(verbArray[i], verbArray[i]);
		}
	 };

	 randomizePrompt = () => {
	 	let subjectArray = new Array("A cyborg" , "A dancing chicken ", "A flying whale ", "A rabid chipmunk ", "A tapdancing elephant ");
	 	let verbArray = new Array("riding a Harley Davidson ", "weilding a katana sword ", "packing an uzi ", "riding a racing snail ", "walking a crocodile on a leash ");
	 	var randSubject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
	 	var randVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
	 	document.getElementById("promptText").innerHTML = randSubject + " " + randVerb;
	 	// alert(rand)
	 }


  render() {
    return (
      <div className="prompt container">


	<form className="row">
			<div className="col-12 prompt-select subjectDropDownDiv">
				  <div className="form-group">
				    <label htmlFor="subjectDropDown">Subject</label>
				    <select className="form-control " id="subjectDropDown">
				    	<option>Random</option>
				    </select>
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

export default Prompt;