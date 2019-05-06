import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putMarkdown } from './action-creators/simpleAction';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.putMarkdown(this.props.userMarkdown.userMarkdown);
	}

	render() {
		return (
			<Button color='primary' onClick={this.handleClick}>
				Save
			</Button>
		);
	}
};

const mapStateToProps = ({ userMarkdown }) => {   
	return { userMarkdown }
};

const mapDispatchToProps = (dispatch) => {
	return {
		putMarkdown: (markdown) => {
			dispatch(putMarkdown(markdown))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);