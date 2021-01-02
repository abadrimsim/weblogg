import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid, Typography } from '@material-ui/core';

import Posts from '../components/Posts/Posts';
import Loader from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const HomeScreen = () => {
	const [posts, setPosts] = useState([]);

	const url = 'http://localhost:5000/api/post';

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await axios.get(url);
			setPosts(res.data.reverse());
		} catch (error) {
			console.log({ error: error });
		}
	};

	// const renderPost = () => {
	// 	if (posts.length === 0) {
	// 		return <Loader />;
	// 	} else {
	// 		return posts.map((post) => (
	// 			<Posts
	// 				key={post._id}
	// 				image={post.image}
	// 				category={post.category}
	// 				title={post.title}
	// 				body={post.body}
	// 				createdAt={post.createdAt}
	// 			/>
	// 		));
	// 	}
	// };

	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid item sm={10}>
				<Grid container direction='column'>
					<Typography gutterBottom variant='h2'>
						Hey! Welcome to Weblogg!
					</Typography>
					<Grid container>
						<Grid item sm={9}>
							{/* {renderPost()} */}
							<Posts />
							<Posts />
							<Posts />
							<Posts />
							<Posts />
							<Posts />
						</Grid>
						<Grid item sm={3}>
							<Posts />
						</Grid>
					</Grid>
					<Grid item sm={12}>
						<Footer />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HomeScreen;
