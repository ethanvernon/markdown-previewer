import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMarkdown } from './action-creators/simpleAction';
import './Markdown.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

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
			<Container className='markdown'>
				<Row noGutters>			
					<Col xs="6" ><textarea id='user-md' rows="20" value={this.props.userMarkdown.userMarkdown} onChange={this.handleChange}/></Col>
					<Col xs="6">.col-6</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = ({ userMarkdown }) => {

	// Destructuring out messages from state and assigning it to the key
	// messages, since the key and value are bother the same you can leave out
	// messages: messages and just have messages, both are the same
   
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
