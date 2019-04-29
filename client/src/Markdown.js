import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMarkdown } from './action-creators/simpleAction';
import './Markdown.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

class Markdown extends Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
		// this.submitTitle = this.submitTitle.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeMarkdown(event.target.value);
	}

	render() {
		return (	
			<Col md="6" >
				<div className='label'>
					MARKDOWN
				</div>
				<textarea id='user-md' value={this.props.userMarkdown.userMarkdown} onChange={this.handleChange}/>
			</Col>
					
		);
	}
}

const mapStateToProps = ({ userMarkdown }) => {   
	return { userMarkdown }
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeMarkdown: (markdown) => {
			dispatch(changeMarkdown(markdown))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);
