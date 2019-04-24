import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOutputBox } from './action-creators/simpleAction';
import './Markdown.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

class OutputBox extends Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
		// this.submitTitle = this.submitTitle.bind(this);
		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		//this.props.changeMarkdown(event.target.value);
	}

	render() {
		return (	
			<Col md="6" >
				<div class='markdown-output'>
					{this.props.markdownDisplay.markdownDisplay}
				</div>
			</Col>
					
		);
	}
}

const mapStateToProps = ({ markdownDisplay }) => {

	// Destructuring out messages from state and assigning it to the key
	// messages, since the key and value are bother the same you can leave out
	// messages: messages and just have messages, both are the same
   
	return { markdownDisplay }
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateOutputBox: (markdownOuput) => {
			dispatch(updateOutputBox(markdownOuput))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputBox);
