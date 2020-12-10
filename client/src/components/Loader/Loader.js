import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<Spinner
			animation='border'
			variant='info'
			role='status'
			className={styles.customSpinner}
		/>
	);
};

export default Loader;
