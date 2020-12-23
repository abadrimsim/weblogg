import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

import './Header.css';

const Header = () => {
	const [categories, setCategories] = useState([]);

	const url = 'http://localhost:5000/api/category';

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await axios.get(url);
			setCategories(res.data);
		} catch (error) {
			console.log({ error: error });
		}
	};

	const handleClearStorage = () => {
		if (localStorage.token) {
			localStorage.removeItem('token');
		}
	};

	const loginLogout = () => {
		return localStorage.token ? (
			<>
				<LinkContainer onClick={handleClearStorage} to='/'>
					<Nav.Link>Log Out</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/'>
					<Nav.Link>Create</Nav.Link>
				</LinkContainer>
			</>
		) : (
			<LinkContainer to='/login'>
				<Nav.Link>Log In</Nav.Link>
			</LinkContainer>
		);
	};

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
								{categories.map((category) => (
									<NavDropdown.Item>{category.category}</NavDropdown.Item>
								))}
							</NavDropdown>
						</Nav>
						<Nav>{loginLogout()}</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
