import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	return (
		<div className='navbar-container'>
			<Navbar id='white-nav' color='dark' light expand='md'>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<a href="http://fromgaming.com/" target='__blank'>Contact me</a>
						</NavItem>
					</Nav>
			</Navbar>
		</div>
    );
  }
}