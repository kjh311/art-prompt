import React, { Component } from 'react';
// import logo from './logo.svg';
import './prompt.scss';
// import Nav from './components/nav';

class Prompt extends Component {
  render() {
    return (
      <div className="prompt container">


<form className="row">
			<div className="col-12 prompt-select">
			   
				  <div className="form-group ">
				    <label for="exampleFormControlSelect1">Subject</label>
				    <select className="form-control " id="exampleFormControlSelect1">
				      <option>Random</option>
				      <option>A cyborg</option>
				      <option>A mutant giraffe</option>
				      <option>An evil villain</option>
				      <option>A ninja goldfish</option>
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

				  <button type="button" class="btn btn-primary randomize-button">Randomize</button>
				
	  		</div>
</form>


	  </div>
    );
  }
}

export default Prompt;