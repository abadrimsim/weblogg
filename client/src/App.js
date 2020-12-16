import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import './App.css';

const App = () => {
	return (
		<Router>
			<Header />
			<Logo />
			<Container>
				<Route path='/' exact component={HomeScreen} />
				<Route path='/login' exact component={LoginScreen} />
				<Route path='/register' exact component={RegisterScreen} />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
