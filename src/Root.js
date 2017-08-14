import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Root extends Component {
	render() {
		return (
			<div>
				<h1>This is a fucking website</h1>
				<p>It contains one or more <Link to='/counter1'>counters</Link></p>
			</div>
		);
	}
}

export default Root;