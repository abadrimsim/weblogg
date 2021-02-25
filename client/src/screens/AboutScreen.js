import React from 'react';

import { Grid } from '@material-ui/core';

import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';

const AboutScreen = () => {
	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid item sm={10}>
				<About />
			</Grid>
		</Grid>
	);
};

export default AboutScreen;
