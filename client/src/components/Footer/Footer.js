import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles.customFooter}>
			<p className={styles.customText}>
				&copy; {year} Copyright Angel Adrimsim | All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
