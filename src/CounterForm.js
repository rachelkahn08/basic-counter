import React, { Component } from 'react';
import Counter from './Counter';

const counterID = "RachelKahn-Counter-Test";

class CounterForm extends Component {
	constructor(props) {
		super(props);
		this.changeValue = this.changeValue.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.submitCounter = this.submitCounter.bind(this);


		this.state = {
			title: this.props.title,
			value: this.props.value,
		}

	}

	componentDidMount() {
		this.fetchApiData("title");
		this.fetchApiData("value");
	}

	changeTitle(event) {
		const newTitle = event.target.value;	
		this.setState({ title: newTitle });
	}


	changeValue(event) {
		const newValue = event.target.value;	
		this.setState({ value: newValue });
		console.log(newValue);
	}

	submitCounter(event) {
		this.postToApi(counterID + '-title', this.state.title);
		this.postToApi(counterID + '-value', this.state.value);
	}

	postToApi(dataKey, saveData) {
		console.log('fired');
		let counterInfo = {
		     type: "string",
		     content: saveData
		   };
		   fetch("http://circuslabs.net:3000/data/" + dataKey, {
		     method: "POST",
		     body: JSON.stringify(counterInfo),
		     headers: {
		       "Content-Type": "application/json"
		     }
		   })
		     .then(response => response.text())
		     .then(data => {
		       console.log("yay data", data);
		     })
		     .catch(function(err) {
		       console.log("something got fucked up", err);
		     });
	}

	fetchApiData(dataType) {
		console.log(counterID);
		const dataID = counterID + '-' + dataType;

		fetch("http://circuslabs.net:3000/data/" + dataID, {
		      method: "GET",
		      headers: {
		        "Content-Type": "application/json"
		      }
		    })
		      .then(response => {
		        if (response.status === 200) {
		          return response.text();
		        }
		        return "";
		      })
		      .then(data => {
		        console.log("yay data", dataType, data);
		        let value = data;
		        if ( value ) {
		          if (dataType === "value") {
		            value = parseInt(data, 10);
		          }
		          this.setState({ [dataType]: value });
		        }
		      })
		      .catch(function(err) {
		        console.log("something got fucked up", err);
		      });
	}

	render() {

		return (

			<div>
				<form>
					Enter Counter Title: <input type="text" name="title" value={ this.state.title } onChange={ this.changeTitle }/>
					<br />
					Enter Starting Value: <input type="num" name="value" value={ this.state.value } onChange={ this.changeValue }/>
				</form>
				<div>
					<Counter title={ this.state.title } value={ this.state.value } />
				</div>
				<button onClick={ this.submitCounter }>Save Counter</button>
			</div>
		);
	}
}

export default CounterForm;