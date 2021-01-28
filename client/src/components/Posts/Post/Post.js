import React from 'react';
// import dateFormat from 'dateformat';

import {
	Avatar,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grow,
	Typography,
} from '@material-ui/core';
import useStyles from './styles';

// const Posts = ({ image, category, title, body, createdAt }) => {
// 	const date = dateFormat(createdAt, 'dd. mmm yyyy');

// 	return (
// 		<Card className={styles.customCard}>
// 			<Card.Img variant='top' src={image} />
// 			<Card.Body className={styles.cardBody}>
// 				<Card.Subtitle className={styles.cardCategory}>
// 					{category}
// 				</Card.Subtitle>
// 				<Card.Title className={styles.cardTitle}>{title}</Card.Title>
// 				<Card.Text className={styles.cardText}>{body}</Card.Text>
// 				<Button className={styles.button}>Read More</Button>
// 				<footer className={styles.cardFooter}>{date}</footer>
// 			</Card.Body>
// 		</Card>
// 	);
// };

const Post = () => {
	const classes = useStyles();

	return (
		<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
			<Card className={classes.root}>
				<CardMedia
					component='img'
					className={classes.postImage}
					alt='10 Reasons Why I Love Coffee'
					image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
					title='10 Reasons Why I Love Coffee'
				/>

				<CardActionArea className={classes.postContainer}>
					<CardContent className={classes.postContent}>
						<Typography variant='h4' className={classes.postTitle}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography
							variant='body2'
							component='p'
							className={classes.postCategory}
						>
							Lifestyle
						</Typography>

						<Typography
							variant='body2'
							component='p'
							className={classes.postText}
						>
							A romantic journey is the best way to fill your relationship with
							a loved one with new feelings and vivid emotions. This journey
							will leave only pleasant impressions...
						</Typography>

						<CardContent className={classes.accountUser}>
							<Avatar
								alt='Han Ji-pyeong'
								src='https://pbs.twimg.com/profile_images/1336902902661595136/zSqCWzr5.jpg'
								className={classes.userAvatar}
							/>
							<Typography
								variant='h5'
								component='p'
								className={classes.userName}
							>
								Han Ji Pyeong
							</Typography>
							<Typography variant='h5' component='p' className={classes.date}>
								Jan 2, 2021
							</Typography>
						</CardContent>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grow>
	);
};

export default Post;
