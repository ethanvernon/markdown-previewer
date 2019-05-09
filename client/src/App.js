import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Name from './Name';
import {Header} from './Header';
import Markdown from './Markdown';
import OutputBox from './OutputBox';
import { Container, Row, Col } from 'reactstrap';
import { Landing } from './Landing';
import { Footer } from './Footer';
import SaveButton from './SaveButton';
import LoadButton from './LoadButton';
import Passkey from './Passkey';

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
				<div className='nameAndSave'>
					<Row className='headRow'>
						<Name />
						<Passkey />
						<Col sm="4">
							<SaveButton />
							<LoadButton />
						</Col>
					</Row>
				</div>
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
