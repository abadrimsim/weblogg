import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import './Header.css';

const Header = () => {
	return (
		<header>
			<Navbar expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/about'>
								<Nav.Link>About</Nav.Link>
							</LinkContainer>

							<NavDropdown title='Category' id='basic-nav-dropdown'>
								<NavDropdown.Item>Technology</NavDropdown.Item>
								<NavDropdown.Item>Travel</NavDropdown.Item>
								<NavDropdown.Item>Lifestyle</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href='#login'>Log in</Nav.Link>
							<Nav.Link href='#register'>Register</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<h1 className='custom-header'>WEBLOGG</h1>
		</header>
	);
};

export default Header;
