import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from './action-creators/simpleAction';
import './Name.scss';

class Name extends Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
		// this.submitTitle = this.submitTitle.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeName(event.target.value);
	}

	render() {
		return (
		<div className='name'>
			<p>DOCUMENT NAME</p>
			<input value={this.props.docName.docName} onChange={this.handleChange}/>
		</div>
		);
	}
}

const mapStateToProps = ({ docName }) => {

	// Destructuring out messages from state and assigning it to the key
	// messages, since the key and value are bother the same you can leave out
	// messages: messages and just have messages, both are the same
   
	return { docName }
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeName: (name) => {
			dispatch(changeName(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
