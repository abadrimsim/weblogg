import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './FormContainer.module.css';

const FormContainer = ({ children }) => {
	return (
		<Container className={styles.customContainer}>
			<Row>
				<Col>{children}</Col>
			</Row>
		</Container>
	);
};

export default FormContainer;
