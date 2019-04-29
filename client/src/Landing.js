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
					<h1>Preview Your Markup Text as You Make It, and Save Your Work to Our Database</h1>
				</div>
			</div>
			
		</div>
		);
	}
}