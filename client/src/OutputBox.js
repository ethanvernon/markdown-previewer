import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOutputBox } from './action-creators/simpleAction';
import './Markdown.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import marked from 'marked';

class OutputBox extends Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
		// this.submitTitle = this.submitTitle.bind(this);
		this.setMarkdownDispaly = this.setMarkdownDispaly.bind(this);
	}

	setMarkdownDispaly() {
		let rawMarkup=marked(this.props.markdownDisplay.markdownDisplay, {sanitize:true});
		return { __html: rawMarkup };
	}

	render() {
		return (	
			<Col md="6" >
				<div class='markdown-output' dangerouslySetInnerHTML={this.setMarkdownDispaly()} />
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
