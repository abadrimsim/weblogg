import React, { useEffect, useState } from 'react';
import {
	Container,
	FormControl,
	Grid,
	Grow,
	InputLabel,
	Input,
	Typography,
} from '@material-ui/core';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';

import useStyles from '../components/FormContainer/styles';

const ContactScreen = () => {
	return (
		<Grid container direction='row'>
			<Grid item sm={2}>
				<Navbar />
			</Grid>
			<Grid item sm={9}>
				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
					<Typography>Hey you, welcome back!</Typography>
				</Grow>

				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }}>
					<FormControl>
						<InputLabel htmlFor='email'>Email Address</InputLabel>
						<Input id='email' aria-describedby='email address' />
					</FormControl>
				</Grow>
			</Grid>
		</Grid>
	);
};

export default ContactScreen;
