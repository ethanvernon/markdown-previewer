import React, { Component } from 'react';
import axios from "axios";
import './Landing.scss';

export class Landing extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
		};

	}
	
	render() {
		return (
		<div className='landing'>	

			<div className='main' id='main'>
				<div className='statement'>
					<h1>Preview Your Markdown Text as You Type</h1>
					<h2>This free markup editor allows you to live preview and save your markdown text</h2>
				</div>
			</div>
			
		</div>
		);
	}
}