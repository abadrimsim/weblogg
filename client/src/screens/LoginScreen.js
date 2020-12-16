import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Form, Button, InputGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer/FormContainer';
import styles from '../components/FormContainer/FormContainer.module.css';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const LoginScreen = () => {
	let history = useHistory();
	const url = 'http://localhost:5000/api/user/login';

	const [passwordShown, setPasswordShown] = useState(false);
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	});

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setLoginUser({ ...loginUser, [name]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(url, loginUser, config);
			localStorage.setItem('token', res.data.token);

			if (localStorage.token) {
				history.push('/');
			}
		} catch (error) {
			console.log({ error: error });
		}
	};

	return (
		<FormContainer>
			<h2 className={styles.customHeader}>Hey you, welcome back!</h2>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Control
						className={styles.customInput}
						type='email'
						placeholder='name@example.com'
						name='email'
						value={loginUser.email}
						onChange={handleInputChange}
						required
					></Form.Control>
				</Form.Group>

				<InputGroup className='mb-3'>
					<Form.Control
						className={styles.customInput}
						type={passwordShown ? 'text' : 'password'}
						placeholder='password'
						name='password'
						value={loginUser.password}
						onChange={handleInputChange}
						required
					></Form.Control>
					<InputGroup.Append onClick={togglePasswordVisibility}>
						<Button size='sm' variant='outline-info'>
							{passwordShown ? eye : eyeSlash}
						</Button>
					</InputGroup.Append>
				</InputGroup>

				<Button className={styles.customButton} type='submit' variant='primary'>
					Continue
				</Button>
				<Form.Text className={styles.customText}>
					Don't have an account yet? Create one
					<Link to='/register'> here</Link>!
				</Form.Text>
			</Form>
		</FormContainer>
	);
};

export default LoginScreen;
