import React from 'react';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
// import { Image, Row, Col, Container } from 'react-bootstrap';
// import styles from './FormContainer.module.css';

const FormContainer = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={9} className={classes.image} />
			<Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
				<div className={classes.paper}>{children}</div>
			</Grid>
		</Grid>
	);
};

export default FormContainer;
