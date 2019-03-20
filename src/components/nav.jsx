import React, { Component } from 'react';
import './nav.css';
import './nav.css';

export class Nav extends Component {
	state = {
		title: 'Art Prompt'
	};


	render() {
		return (

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
			    <div className="d-flex flex-grow-1">
			        <span className="w-100 d-lg-none d-block"></span>
			        <a className="navbar-brand d-none d-lg-inline-block" href="#">
			            Art Prompt
			        </a>
			        <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
			            <img src="//placehold.it/40?text=LOGO" alt="logo" />
			        </a>
			        <div className="w-100 text-right">
			            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
			                <span className="navbar-toggler-icon"></span>
			            </button>
			        </div>
			    </div>
			    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
			        <ul className="navbar-nav ml-auto flex-nowrap">
			     
			            <li className="nav-item">
			                <a href="#" className="nav-link m-2 menu-item">Login</a>
			            </li>
			            <li className="nav-item">
			                <a href="#" className="nav-link m-2 menu-item">My Prompts</a>
			            </li>
			        </ul>
			    </div>
			</nav>
		);
	}
}

export default Nav;