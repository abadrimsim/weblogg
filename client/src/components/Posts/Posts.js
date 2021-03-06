import React from 'react';

import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

import Post from './Post/Post';

const Posts = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Grid container className={classes.item}>
				<Grid item>
					<Post />
				</Grid>
				<Grid item>
					<Post />
				</Grid>
				<Grid item>
					<Post />
				</Grid>
				<Grid item>
					<Post />
				</Grid>
				<Grid item>
					<Post />
				</Grid>
				<Grid item>
					<Post />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Posts;
