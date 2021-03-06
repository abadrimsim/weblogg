import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
	Button,
	Container,
	IconButton,
	Grid,
	Typography,
} from '@material-ui/core';
import { EditOutlined, DeleteOutlineOutlined } from '@material-ui/icons';

import Post from '../Post/Post';

import useStyles from './styles';

const UserPosts = () => {
	const classes = useStyles();
	// const [posts, setPosts] = useState([]);

	// const url = 'http://localhost:5000/api/post';

	return (
		<Grid container direction='column' className={classes.root}>
			<Typography
				variant='body1'
				component='p'
				className={classes.sectionHeader}
			>
				Personal Posts
			</Typography>
			<Grid item>
				<Button>Edit</Button>
				<Button component={Link} to='/create'>
					Add
				</Button>
			</Grid>

			<Grid container>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
				<Grid item>
					<>
						<Post />
						<Container className={classes.buttons}>
							<IconButton color='primary' aria-label='delete' component='span'>
								<DeleteOutlineOutlined />
							</IconButton>
							<IconButton color='primary' aria-label='edit' component='span'>
								<EditOutlined />
							</IconButton>
						</Container>
					</>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default UserPosts;
