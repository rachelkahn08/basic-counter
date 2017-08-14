import React, { Component } from 'react';
import Counter from './Counter';

class CounterForm extends Component {
	constructor(props) {
		super(props);
		this.changeValue = this.changeValue.bind(this);

		this.state = {
			title: this.props.title,
			value: this.props.value,
		}

	}

	changeValue(event) {
		const targetState = event.target.name;
		var newValue;

		if (event.target.type == "number") {
			let newValue = parseInt(event.target.value, 10);	
		} else {
			let newValue = event.target.value;	
		}
		

		this.setState({ [targetState]: newValue });

	}

	render() {

		return (

			<div>
				<form>
					<input type="text" name="title" value={ this.state.name } onChange={ this.changeValue }/>
					<input type="number" name="value" value={ this.state.value } onChange={ this.changeValue }/>
				</form>
				<div>
					<Counter title={ this.state.title } value={ this.state.value } />
				</div>
			</div>
		);
	}
}

export default CounterForm;