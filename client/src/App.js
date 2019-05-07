import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Name from './Name';
import {Header} from './Header';
import Markdown from './Markdown';
import OutputBox from './OutputBox';
import { Container, Row } from 'reactstrap';
import { Landing } from './Landing';
import { Footer } from './Footer';
import SaveButton from './SaveButton';

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
				<Landing />
				<Row noGutters>
					<Name />
					<SaveButton />
				</Row>
				<div className='markdown'>
					<Row noGutters>	
						<Markdown />
						<OutputBox />
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
};

export default connect(null, null)(App);
