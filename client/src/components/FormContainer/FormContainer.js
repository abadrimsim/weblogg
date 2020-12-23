import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import styles from './FormContainer.module.css';

const FormContainer = ({ children }) => {
	return (
		<>
			<Row>
				<Col className={styles.imageContainer}>
					<Container className={styles.mainHeader}>
						Express yourself and share your passions with Weblogg.
					</Container>
					<Image
						src='https://i.ibb.co/VQn9P5c/weblogg-account-user.png'
						className={styles.customImage}
						fluid
					/>
				</Col>
				<Col className={styles.formContainer} xs={12} md={8}>
					{children}
				</Col>
			</Row>
		</>
	);
};

export default FormContainer;
