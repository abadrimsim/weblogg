import React from 'react';

import { Divider, Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
	const classes = useStyles();
	const year = new Date().getFullYear();

	return (
		<>
			<Divider className={classes.divider} />
			<div className={classes.footerContainer}>
				<Typography className={classes.text} variant='body2' align='center'>
					Express yourself and share your passions with Weblogg.
				</Typography>
				<Typography
					className={classes.copyright}
					variant='body2'
					align='center'
				>
					&copy; {year} Angel Adrimsim | All Rights Reserved.
				</Typography>
			</div>
		</>
	);
};

export default Footer;
