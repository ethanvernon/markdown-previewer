import React, { Component } from 'react';
import './App.scss';
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

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}


	render() {
	return (
		<div className='navbar-container'>
			<Navbar id='white-nav' color='dark' light expand='md'>
				<NavbarToggler onClick={this.toggle} className='mr-2'/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<a href="">Link</a>{/*<Link to="/" className='padded-nav' onClick={this.closeNav} > Home </Link>*/}
						</NavItem>

						<NavItem>
							<a href="">Link</a>{/*<Link to="/documentation" className='padded-nav' onClick={this.closeNav} > Documentation </Link>*/}
						</NavItem>

						<NavItem>
							<a href="">Link</a>{/*<Link to='/log' to="/log" className='padded-nav' onClick={this.closeNav} > Log Exercise</Link>*/}
						</NavItem>

						<NavItem>
							<a href="">Link</a>{/*<Link to='/signup' to="/signup" className='padded-nav' onClick={this.closeNav} > Sign Up </Link>*/}
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
    );
  }
}