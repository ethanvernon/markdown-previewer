import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Name from './Name';
import {Header} from './Header';
import Markdown from './Markdown';
import OutputBox from './OutputBox';
import { Container, Row } from 'reactstrap';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Name />
					<Row noGutters>	
						<Markdown />
						<OutputBox />
					</Row>
			</div>
		);
	}
};

export default connect(null, null)(App);
