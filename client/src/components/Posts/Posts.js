import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import dateFormat from 'dateformat';

import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Divider,
	Typography,
} from '@material-ui/core';
import useStyles from './styles';

// import styles from './Posts.module.css';

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

const Posts = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image='https://www.technipages.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png'
					title='Contemplative Reptile'
				/>
			</CardActionArea>

			<CardContent>
				<Typography className={classes.category} variant='h5'>
					Lifestyle
				</Typography>
				<CardHeader
					className={classes.cardHeader}
					title='The Best Working Environment'
					titleTypographyProps={{ variant: 'h4' }}
					subheader='Posted on March 15, 2018 by John Wood'
					subheaderTypographyProps={{ variant: 'h6' }}
				/>
				<Typography className={classes.body} variant='body2' component='p'>
					My first true love happened when I was a student at Shaw University in
					Raleigh NC and I must say it was a wonderful experience. She was a
					freshman, and she was so beautiful with caramel skin and soft dark
					eyes. She had a sweet slim frame and curves of a finely chiseled piece
					of clay. Everybody knew her government name, but, eventually they knew
					her by the name I affectionately called her by, “Blue”.
				</Typography>
			</CardContent>

			<CardActions className={classes.cardActions}>
				<Button size='small' className={classes.button}>
					Continue Reading
				</Button>
			</CardActions>

			<Divider />
		</Card>
	);
};

export default Posts;
