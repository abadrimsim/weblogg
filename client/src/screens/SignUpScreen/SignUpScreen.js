import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer/FormContainer';
import styles from './SignUpScreen.module.css';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const SignUpScreen = () => {
	const [passwordShown, setPasswordShown] = useState(false);
	const [userSignUp, setUserSignUp] = useState({
		fullName: '',
		email: '',
		password: '',
	});

	const url = 'http://localhost:5000/api/user/signup';

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserSignUp({ ...userSignUp, [name]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(url, userSignUp);
			sessionStorage.setItem('token', res.data.token);
		} catch (error) {
			console.log({ error: error });
		}
	};

	return (
		<FormContainer>
			<h2 className={styles.customHeader}>
				Express yourself and share your passions with Weblogg.
			</h2>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Control
						className={styles.customInput}
						type='text'
						placeholder='Full Name'
						name='fullName'
						value={userSignUp.fullName}
						onChange={handleInputChange}
						required
					></Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Control
						className={styles.customInput}
						type='email'
						placeholder='Email e.g. name@example.com'
						name='email'
						value={userSignUp.email}
						onChange={handleInputChange}
						required
					></Form.Control>
				</Form.Group>

				<InputGroup className='mb-3'>
					<Form.Control
						className={styles.customInput}
						type={passwordShown ? 'text' : 'password'}
						placeholder='Enter your password'
						name='password'
						value={userSignUp.password}
						onChange={handleInputChange}
						required
					></Form.Control>
					<InputGroup.Append onClick={togglePasswordVisibility}>
						<Button size='sm' variant='outline-info'>
							{passwordShown ? eye : eyeSlash}
						</Button>
					</InputGroup.Append>
					<Form.Text className={styles.customText}>
						Password should be a minimum of 8 characters and should contain an
						uppercase letter and a symbol.
					</Form.Text>
				</InputGroup>

				<Button className={styles.customButton} type='submit' variant='primary'>
					Sign Up
				</Button>
			</Form>
		</FormContainer>
	);
};

export default SignUpScreen;
