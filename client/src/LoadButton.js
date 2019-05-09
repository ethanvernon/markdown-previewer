import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { getMarkdown } from './action-creators/simpleAction';
import { Col } from 'reactstrap';

class LoadButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('searching for markdown with passkey: '+this.props.passkey)
		this.props.getMarkdown(this.props.passkey);
	}

	render() {
		const isLoading = this.props.loading;
		let button;

		if (isLoading) {
			button = (
				 <Button color='secondary'>
				 	Loading...
				 </Button>
			);
		} else {
			button = (
				<Button color='secondary' onClick={this.handleClick}>
					Load
				</Button>
			);
		}

		return (
			<div className='loadAndSaveButton'>
				{ button }
			</div>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		loading: state.loadedMarkdown.loading, 
		passkey: state.changePasskey.passkey,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMarkdown: (markdown) => {
			dispatch(getMarkdown(markdown))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);