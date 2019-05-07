import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from './action-creators/simpleAction';
import './App.scss';

class Name extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeName(event.target.value);
	}

	render() {
		let docKey = this.props.result;
		let keySpan;

		if(docKey) {
			keySpan = <span>(document key: {this.props.result.passkey})</span>
		}

		return (
		<div className='name'>
			<p>DOCUMENT NAME {keySpan}</p>
			<input className='user-text-box' value={this.props.docName.docName} onChange={this.handleChange}/>
		</div>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		docName: state.docName,		
		result: state.changeMarkdown.markdown[state.changeMarkdown.markdown.length-1]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeName: (name) => {
			dispatch(changeName(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
