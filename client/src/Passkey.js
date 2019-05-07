import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePasskey } from './action-creators/simpleAction';
import './App.scss';
import { Col } from 'reactstrap';

class Passkey extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changePasskey(event.target.value);
	}

	render() {

		return (
			<Col md="4">
				<div className='name'>
					<span>PASSKEY: </span>
					<input className='user-passkey' value={this.props.passkey} onChange={this.handleChange}/>
				</div>
			</Col>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		passkey: state.changePasskey.passkey,
		result: state.changeMarkdown.markdown[state.changeMarkdown.markdown.length-1]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changePasskey: (name) => {
			dispatch(changePasskey(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Passkey);
