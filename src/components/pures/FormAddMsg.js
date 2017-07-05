import React, { Component } from 'react';

class FormAddMsg extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			text: ''
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
    this.setState({
			text: e.target.value
		});
  }

	_handleSubmit(e) {
		e.preventDefault();
		this.props.addMessage(this.state.text);
	}

	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<input type="text"
								value={this.state.text}
								onChange={this._handleChange}
								/>
				<input type="submit" value="Send" />
			</form>
		);
	}
}

export default FormAddMsg;
