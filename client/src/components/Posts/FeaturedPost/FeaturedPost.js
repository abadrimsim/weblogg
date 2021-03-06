import React from 'react';

import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import useStyles from './styles';

const FeaturedPost = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<Typography
				variant='body1'
				component='p'
				className={classes.sectionHeader}
			>
				Featured Post
			</Typography>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image='https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
					title='My First Blog Website Using the MERN Stack'
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant='h5' component='h2'>
						My First Blog Website Using the MERN Stack
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default FeaturedPost;
