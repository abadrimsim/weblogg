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

							<LinkContainer to='/about'>
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>

							<NavDropdown title='Categories' id='basic-nav-dropdown'>
								<NavDropdown.Item>Technology</NavDropdown.Item>
								<NavDropdown.Item>Travel</NavDropdown.Item>
								<NavDropdown.Item>Lifestyle</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<LinkContainer to='/signup'>
								<Nav.Link>Sign in</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
