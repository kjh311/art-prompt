import React, { Component } from 'react';
// import logo from './logo.svg';
import './prompt.scss';
// import Nav from './components/nav';



 

class Prompt extends Component {



	handleClick = () => {
		var myArray = new Array("1", "2", "3", "4", "5");


		// Get dropdown element from DOM
		var dropdown = document.getElementById("selectNumber");

		// Loop through the array
		for (var i = 0; i < myArray.length; ++i) {
  		  // Append the element to the end of Array list
  		  dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
		}

		// Get dropdown element from DOM
// var dropdown = document.getElementById("exampleFormControlSelect1");

// Loop through the array
// for (var i = 0; i < options.length; ++i) {
//     // Append the element to the end of Array list
//     dropdown[dropdown.length] = new Option(options[i], options[i]);
// }​



 };

  render() {
    return (
      <div className="prompt container">


	<form className="row">
			<div className="col-12 prompt-select">




			   
				  <div className="form-group ">
				    <label for="selectNumber">Subject</label>
				    <select className="form-control " id="selectNumber">
				    	<option>Choose a number</option>


				    </select>
				  </div>
				
	  		</div>

	  		<div className="col-12 prompt-select">
			   
				  <div className="form-group">
				    <label for="exampleFormControlSelect2">Verb</label>
				    <select className="form-control" id="exampleFormControlSelect2">
				      <option>Random</option>
				      <option>riding a Harley Davidson away from</option>
				      <option>shooting a gun at</option>
				      <option>flying near</option>
				      <option>weilding a katana sword against</option>
				    </select>
				  </div>
				
	  		</div>

	  		<div className="col-12 prompt-select">
			   
				  <div className="form-group">
				    <label for="exampleFormControlSelect3">Object</label>
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
				    <label for="exampleFormControlSelect4">Style</label>
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

				  <button type="button" class="btn btn-primary randomize-button"   onClick={this.handleClick}>Randomize</button>
				
	  		</div>
</form>


	  </div>
    );
  }
}

export default Prompt;