import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import CreatePost from '../components/Posts/CreatePost/CreatePost';
import Navbar from '../components/Navbar/Navbar';

const CreatePostScreen = () => {
	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid item sm={10}>
				<CreatePost />
			</Grid>
		</Grid>
	);
};

export default CreatePostScreen;
