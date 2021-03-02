import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

import Post from './Post/Post';

const Posts = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography
				variant='body1'
				component='p'
				className={classes.sectionHeader}
			>
				Recent Posts
			</Typography>

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
