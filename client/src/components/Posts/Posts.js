import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

import Post from './Post/Post';

const Posts = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Typography variant='h2' className={classes.header}>
				Recent Posts
			</Typography>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</Grid>
	);
};

export default Posts;
