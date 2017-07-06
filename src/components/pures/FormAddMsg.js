import React, { Component } from 'react';

class FormAddMsg extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			text: ''
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleClear = this._handleClear.bind(this);
	}

	_handleChange(e) {
    this.setState({
			text: e.target.value
		});
  }

	_handleSubmit(e) {
		e.preventDefault();
		this.props.addMessage(this.state.text);
		this.setState({
			text: ''
		});
	}

	_handleClear(e) {
		this.props.clearMessages();
	}

	render() {
		return (
			<form onSubmit={this._handleSubmit} className="o-box c-msg-form">
				<input type="text"
								value={this.state.text}
								onChange={this._handleChange}
								/>
				<input type="submit" value="Send" />
				<input type="button" value="Clear" onClick={this._handleClear} />
			</form>
		);
	}
}

export default FormAddMsg;
