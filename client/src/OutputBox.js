import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Markdown.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import marked from 'marked';

class OutputBox extends Component {
	constructor(props) {
		super(props);

		this.setMarkdownDisplay = this.setMarkdownDisplay.bind(this);
	}

	setMarkdownDisplay() {
		let rawMarkup=marked(this.props.userMarkdown.userMarkdown, {sanitize:true, breaks:true});
		return { __html: rawMarkup };
	}

	render() {
		return (	
			<Col md="6" >
				<div className='label preview-label'>
					PREVIEW
				</div>
				<div className='markdown-output' dangerouslySetInnerHTML={this.setMarkdownDisplay()} />
			</Col>
					
		);
	}
}

const mapStateToProps = ({ userMarkdown }) => {
	return { userMarkdown }
};

export default connect(mapStateToProps, null)(OutputBox);
