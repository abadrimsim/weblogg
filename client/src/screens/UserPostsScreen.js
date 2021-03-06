import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';

import UserPosts from '../components/Posts/UserPosts/UserPosts';
import Navbar from '../components/Navbar/Navbar';

const UserPostsScreen = () => {
	// const [posts, setPosts] = useState([]);

	// const url = 'http://localhost:5000/api/post';

	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid item sm={10}>
				<UserPosts />
			</Grid>
		</Grid>
	);
};

export default UserPostsScreen;
