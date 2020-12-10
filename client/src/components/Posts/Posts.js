import React from 'react';
import { Button, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import styles from './Posts.module.css';

const Posts = ({ image, category, title, body, createdAt }) => {
	const date = dateFormat(createdAt, 'dd. mmm yyyy');

	return (
		<Card className={styles.customCard}>
			<Card.Img variant='top' src={image} />
			<Card.Body className={styles.cardBody}>
				<Card.Subtitle className={styles.cardCategory}>
					{category}
				</Card.Subtitle>
				<Card.Title className={styles.cardTitle}>{title}</Card.Title>
				<Card.Text className={styles.cardText}>{body}</Card.Text>
				<Button className={styles.button}>Read More</Button>
				<footer className={styles.cardFooter}>{date}</footer>
			</Card.Body>
		</Card>
	);
};

export default Posts;
