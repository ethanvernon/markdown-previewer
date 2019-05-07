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
		console.log(this.props);
		this.props.putMarkdown(this.props.userMarkdown.userMarkdown);
	}

	render() {
		const isLoading = this.props.loading;
		let button;

		if (isLoading) {
			console.log(this.props.result);
			button = (
				 <Button color='primary'>
				 	Saving...
				 </Button>
			);
		} else {
			button = (
				<Button color='primary' onClick={this.handleClick}>
					Save
				</Button>
			);
		}

		return (
			<div>
				{ button }
			</div>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		userMarkdown: state.userMarkdown,
		loading: state.changeMarkdown.loading,
		result: state.changeMarkdown.markdown[state.changeMarkdown.markdown.length-1]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		putMarkdown: (markdown) => {
			dispatch(putMarkdown(markdown))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);