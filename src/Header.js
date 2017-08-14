import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Header extends Component {
	render() {
		return (
			<div>
				<h1>FUCKIN HEADER WOO</h1>
				<nav className="App-nav">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/Counter1">Counter 1</NavLink>
					<NavLink to="/CounterForm">Counter Form</NavLink>
				</nav>
			</div>
		);
	}
}

export default Header;