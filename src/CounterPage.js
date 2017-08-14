import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

class CounterPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const { title } = this.props;

		return (
			<div>
				<Counter title={ title } />
			</div>
		);
	}
}

export default CounterPage;