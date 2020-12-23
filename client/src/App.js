import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import './App.css';

const App = () => {
	return (
		<Router>
			<Route path='/' exact component={HomeScreen} />
			<Route path='/login' exact component={LoginScreen} />
			<Route path='/register' exact component={RegisterScreen} />
		</Router>
	);
};

export default App;
