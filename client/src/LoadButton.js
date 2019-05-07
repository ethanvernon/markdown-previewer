import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putMarkdown } from './action-creators/simpleAction';
import { Col } from 'reactstrap';

class LoadButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.getMarkdown(this.props.passkey.passkey);
	}

	render() {
		const isLoading = this.props.loading;
		let button;

		if (isLoading) {
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
			<Col>
				<div className='saveButton'>
					{ button }
				</div>
			</Col>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		loading: state.loadMarkdown.loading
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMarkdown: (passkey) => {
			dispatch(getMarkdown(passkey))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);