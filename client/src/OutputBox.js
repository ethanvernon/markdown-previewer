import React, { Component } from 'react';
import { connect } from 'react-redux';
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
		let rawMarkup=marked(this.props.userMarkdown.userMarkdown, {sanitize:true});
		return { __html: rawMarkup };
	}

	render() {
		return (	
			<Col md="6" >
				<div className='label'>
					PREVIEW
				</div>
				<div className='markdown-output' dangerouslySetInnerHTML={this.setMarkdownDispaly()} />
			</Col>
					
		);
	}
}

const mapStateToProps = ({ userMarkdown }) => {

	// Destructuring out messages from state and assigning it to the key
	// messages, since the key and value are bother the same you can leave out
	// messages: messages and just have messages, both are the same
   
	return { userMarkdown }
};

export default connect(mapStateToProps, null)(OutputBox);
