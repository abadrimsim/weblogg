import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts/Posts';
import Loader from '../components/Loader/Loader';

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

	const renderPost = () => {
		if (posts.length === 0) {
			return <Loader />;
		} else {
			return posts.map((post) => (
				<Posts
					key={post._id}
					image={post.image}
					category={post.category}
					title={post.title}
					body={post.body}
					createdAt={post.createdAt}
				/>
			));
		}
	};

	return <>{renderPost()}</>;
};

export default HomeScreen;
