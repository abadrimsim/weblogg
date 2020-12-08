import React from 'react';
import { Button, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import './Posts.css';

const Posts = ({ image, category, title, body, createdAt }) => {
	const date = dateFormat(createdAt, 'dd. mmm yyyy');
	const renderImg = (image) => {
		if (image === undefined) {
			return <img src='../../../public/images/default-image.png' alt={title} />;
		} else {
			return <img src={image} alt={title} />;
		}
	};

	return (
		<Card className='custom-card'>
			<Card.Img variant='top' src={renderImg(image)} />
			<Card.Body className='card-body'>
				<Card.Subtitle className='card-category'>{category}</Card.Subtitle>
				<Card.Title className='card-title'>{title}</Card.Title>
				<Card.Text className='card-text'>{body}</Card.Text>
				<Button variant='primary'>Read More</Button>
				<footer className='card-footer'>{date}</footer>
			</Card.Body>
		</Card>
	);
};

export default Posts;
