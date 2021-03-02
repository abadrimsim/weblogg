import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';

import Posts from '../components/Posts/Posts';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const HomeScreen = () => {
	// const [posts, setPosts] = useState([]);

	// const url = 'http://localhost:5000/api/post';

	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid container direction='row' sm={10}>
				<Grid container sm={8}>
					<Posts />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HomeScreen;
