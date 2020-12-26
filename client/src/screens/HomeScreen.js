import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';

import Avatar from '../components/Avatar/Avatar';
import Posts from '../components/Posts/Posts';
import Loader from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';

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
		<>
			<Grid container direction='column'>
				<Grid item sm={12}>
					<Avatar />
				</Grid>
				<Grid item sm={12}>
					{/* {renderPost()} */}
					<Posts />
					<Posts />
					<Posts />
				</Grid>

				<Grid item sm={12}>
					<Footer />
				</Grid>
			</Grid>
		</>
	);
};

export default HomeScreen;
