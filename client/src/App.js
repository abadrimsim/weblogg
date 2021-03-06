import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutScreen from './screens/AboutScreen';
import UserPostsScreen from './screens/UserPostsScreen';
import CreatePostScreen from './screens/CreatePostScreen';

import './App.css';

const App = () => {
	return (
		<Router>
			<Grid container>
				<Grid item sm={12}>
					<Route path='/' exact component={HomeScreen} />
					<Route path='/contact' exact component={ContactScreen} />
					<Route path='/login' exact component={LoginScreen} />
					<Route path='/register' exact component={RegisterScreen} />
					<Route path='/about' exact component={AboutScreen} />
					<Route path='/post' exact component={UserPostsScreen} />
					<Route path='/create' exact component={CreatePostScreen} />
				</Grid>
			</Grid>
		</Router>
	);
};

export default App;
