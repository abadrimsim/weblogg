import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';

import './App.css';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path='/' exact component={HomeScreen} />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
