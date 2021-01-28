import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
	Button,
	FormControl,
	InputLabel,
	InputAdornment,
	Input,
	Grow,
	Typography,
	FormHelperText,
} from '@material-ui/core';
// import { Form, Button, InputGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer/FormContainer';
// import styles from '../components/FormContainer/FormContainer.module.css';
import axios from 'axios';

import useStyles from '../components/FormContainer/styles';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const eye = <FontAwesomeIcon icon={faEye} />;
// const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const LoginScreen = () => {
	const classes = useStyles();
	// let history = useHistory();
	// const url = 'http://localhost:5000/api/user/login';

	const [passwordShown, setPasswordShown] = useState(false);
	// const [loginUser, setLoginUser] = useState({
	// 	email: '',
	// 	password: '',
	// });

	// const { register, errors, handleSubmit } = useForm({
	// 	mode: 'onChange',
	// });

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	// const handleInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setLoginUser({ ...loginUser, [name]: value });
	// };

	// const onSubmit = async (e) => {
	// 	const config = {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	};

	// 	try {
	// 		const res = await axios.post(url, loginUser, config);
	// 		localStorage.setItem('token', res.data.token);

	// 		if (localStorage.token) {
	// 			history.push('/');
	// 		}
	// 	} catch (error) {
	// 		console.log({ error: error });
	// 	}
	// };

	return (
		// <FormContainer>
		// 	<h2 className={styles.customHeader}>Hey you, welcome back!</h2>
		// 	<Form onSubmit={handleSubmit(onSubmit)}>
		// 		<Form.Group>
		// 			<Form.Control
		// 				className={styles.customInput}
		// 				type='email'
		// 				placeholder='name@example.com'
		// 				name='email'
		// 				value={loginUser.email}
		// 				onChange={handleInputChange}
		// 				ref={register({
		// 					required: 'This field is required!',
		// 				})}
		// 			></Form.Control>
		// 			{errors.email && (
		// 				<Form.Text className={styles.customError}>
		// 					{errors.email.message}
		// 				</Form.Text>
		// 			)}
		// 		</Form.Group>

		// 		<InputGroup className='mb-3'>
		// 			<Form.Control
		// 				className={styles.customInput}
		// 				type={passwordShown ? 'text' : 'password'}
		// 				placeholder='password'
		// 				name='password'
		// 				value={loginUser.password}
		// 				onChange={handleInputChange}
		// 				ref={register({
		// 					required: 'This field is required!',
		// 				})}
		// 			></Form.Control>
		// 			<InputGroup.Append onClick={togglePasswordVisibility}>
		// 				<Button size='sm' variant='outline-info'>
		// 					{passwordShown ? eye : eyeSlash}
		// 				</Button>
		// 			</InputGroup.Append>
		// 		</InputGroup>

		// 		{errors.password && (
		// 			<Form.Text className={styles.customError}>
		// 				{errors.password.message}
		// 			</Form.Text>
		// 		)}

		// 		<Button className={styles.customButton} type='submit' variant='primary'>
		// 			Continue
		// 		</Button>
		// 		<Form.Text className={styles.customText}>
		// 			Don't have an account?
		// 			<Link to='/register'> Create Account</Link>
		// 		</Form.Text>
		// 	</Form>
		// </FormContainer>
		<FormContainer>
			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 500 }}>
				<Typography className={classes.header}>
					Hey you, welcome back!
				</Typography>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
				<FormControl className={classes.formControl}>
					<InputLabel className={classes.labelRoot} htmlFor='email'>
						Email Address
					</InputLabel>
					<Input
						id='email'
						aria-describedby='email address'
						classes={{
							input: classes.input,
							underline: classes.underline,
						}}
					/>
				</FormControl>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
				<FormControl className={classes.formControl}>
					<InputLabel className={classes.labelRoot} htmlFor='password'>
						Password
					</InputLabel>
					<Input
						id='password'
						aria-describedby='password'
						classes={{
							input: classes.input,
							underline: classes.underline,
						}}
						onClick={togglePasswordVisibility}
						type={passwordShown ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								{passwordShown ? (
									<VisibilityOutlinedIcon />
								) : (
									<VisibilityOffOutlinedIcon />
								)}
							</InputAdornment>
						}
					/>
				</FormControl>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
				<Button className={classes.button} component={Link} to='/login'>
					Continue
				</Button>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
				<FormHelperText id='helper text' className={classes.helperText}>
					New to Weblogg?{' '}
					<Link to='/register' className={classes.helperLink}>
						Create your account now!
					</Link>
				</FormHelperText>
			</Grow>
		</FormContainer>
	);
};

export default LoginScreen;
