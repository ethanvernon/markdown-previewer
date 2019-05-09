import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from './action-creators/simpleAction';
import './App.scss';
import { Col } from 'reactstrap';

class Name extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeName(event.target.value);
	}

	render() {		
		return (
			<Col sm="4" className='name'>
				<div className='vertical-outer-stacked'>
					<p className='input-label'>DOCUMENT NAME </p>
					<input className='user-text-box' value={this.props.docName.docName} onChange={this.handleChange}/>
				</div>
			</Col>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		docName: state.docName,
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
