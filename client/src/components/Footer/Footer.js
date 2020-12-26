import React from 'react';

import { Container, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
// import styles from './Footer.module.css';

const Footer = () => {
	const classes = useStyles();
	const year = new Date().getFullYear();
	return (
		<>
			<Divider />
			<Container className={classes.footer}>
				<Typography className={classes.text} variant='body2' align='center'>
					Express yourself and share your passions with Weblogg.
				</Typography>
				<Typography
					className={classes.copyright}
					variant='body2'
					color='textSecondary'
					align='center'
				>
					&copy; {year} Copyright Angel Adrimsim | All Rights Reserved.
				</Typography>
			</Container>
		</>
	);
};

{
	/* <footer className={styles.customFooter}>
			<p className={styles.customText}>
				&copy; {year} Copyright Angel Adrimsim | All Rights Reserved.
			</p>
		</footer> */
}

export default Footer;
