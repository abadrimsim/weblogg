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

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const eye = <FontAwesomeIcon icon={faEye} />;
// const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

import useStyles from '../components/FormContainer/styles';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

const RegisterScreen = () => {
	const classes = useStyles();
	// let history = useHistory();
	// const url = 'http://localhost:5000/api/user/register';

	const [passwordShown, setPasswordShown] = useState(false);
	// const [registerUser, setRegisterUser] = useState({
	// 	fullName: '',
	// 	email: '',
	// 	password: '',
	// });

	// const { register, errors, handleSubmit } = useForm();

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	// const handleInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setRegisterUser({ ...registerUser, [name]: value });
	// };

	// const onSubmit = async (e) => {
	// 	const config = {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	};

	// 	try {
	// 		const res = await axios.post(url, registerUser, config);
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
		// 	<h2 className={styles.customHeader}>Let's create your account!</h2>
		// 	<Form onSubmit={handleSubmit(onSubmit)}>
		// 		<Form.Group>
		// 			<Form.Control
		// 				className={styles.customInput}
		// 				type='text'
		// 				placeholder='Full Name'
		// 				name='fullName'
		// 				value={registerUser.fullName}
		// 				onChange={handleInputChange}
		// 				ref={register({
		// 					required: 'This field is required!',
		// 					minLength: {
		// 						value: 4,
		// 						message: 'Minimum length is 4.',
		// 					},
		// 				})}
		// 			></Form.Control>
		// 			{errors.fullName && (
		// 				<Form.Text className={styles.customError}>
		// 					{errors.fullName.message}
		// 				</Form.Text>
		// 			)}
		// 		</Form.Group>

		// 		<Form.Group>
		// 			<Form.Control
		// 				className={styles.customInput}
		// 				type='email'
		// 				placeholder='Email e.g. name@example.com'
		// 				name='email'
		// 				value={registerUser.email}
		// 				onChange={handleInputChange}
		// 				ref={register({
		// 					required: 'This field is required!',
		// 					pattern: {
		// 						value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		// 						message: 'Invalid email address.',
		// 					},
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
		// 				placeholder='Enter your password'
		// 				name='password'
		// 				value={registerUser.password}
		// 				onChange={handleInputChange}
		// 				ref={register({
		// 					required: 'This field is required!',
		// 					minLength: {
		// 						value: 8,
		// 						message: 'Minimum length is 8.',
		// 					},
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
		// 			Register
		// 		</Button>
		// 	</Form>
		// </FormContainer>

		<FormContainer>
			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 500 }}>
				<Typography className={classes.header}>
					Let's create your account!
				</Typography>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
				<FormControl className={classes.formControl}>
					<InputLabel className={classes.labelRoot} htmlFor='fullname'>
						Full Name
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
					Register
				</Button>
			</Grow>

			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
				<FormHelperText id='helper text' className={classes.helperText}>
					Already have an account?{' '}
					<Link to='/login' className={classes.helperLink}>
						Log in!
					</Link>
				</FormHelperText>
			</Grow>
		</FormContainer>
	);
};

export default RegisterScreen;
