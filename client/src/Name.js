import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTitle } from './action-creators/simpleAction';
import './Name.scss';

class Name extends Component {
	constructor(props) {
		super(props);

	this.state = {
		input: ''
	}

	// this.handleChange = this.handleChange.bind(this);
	// this.submitTitle = this.submitTitle.bind(this);
	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.changeTitle('New title');
	}

	render() {
		return (
		<div className='title'>	
			<h1 style={{display:'inline'}}>{this.props.title.title}</h1>
			<span style={{textDecoration:'underline', color:'blue', marginLeft:'4px'}} onClick={this.handleClick}>Edit</span>
		</div>
		);
	}
}

const mapStateToProps = ({ title }) => {

	// Destructuring out messages from state and assigning it to the key
	// messages, since the key and value are bother the same you can leave out
	// messages: messages and just have messages, both are the same
   
	return { title }
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeTitle: (title) => {
			dispatch(changeTitle(title))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
