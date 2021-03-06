import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
	Button,
	Container,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
} from '@material-ui/core';

// import useStyles from './styles';

const CreatePost = () => {
	// const classes = useStyles();
	const [value, setValue] = useState('');

	const toolbarOptions = [
		[{ size: ['small', false, 'large', 'huge'] }],
		['bold', 'italic', 'underline'],
		[{ script: 'sub' }, { script: 'super' }],
		['blockquote', 'code-block'],

		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
			{ align: [] },
		],
		['link', 'image', 'video'],
		['clean'],
	];

	const history = {
		delay: 2000,
		maxStack: 500,
		userOnly: true,
	};
	const formats = [
		'size',
		'bold',
		'italic',
		'underline',
		'script',
		'blockquote',
		'code-block',
		'list',
		'bullet',
		'indent',
		'align',
		'link',
		'image',
		'video',
	];

	return (
		<Grid container>
			<Grid item md={8}>
				<TextField
					id='outlined-basic'
					label='Title'
					variant='outlined'
					fullWidth
				/>

				<ReactQuill
					modules={{ toolbar: toolbarOptions, history: history }}
					formats={formats}
					theme='snow'
					value={value}
					onChange={setValue}
				/>
			</Grid>
			<Grid container md={4} direction='column'>
				<Grid item>
					<Button>Publish</Button>
					<Button>Save as Draft</Button>
				</Grid>
				<Grid item>
					<Button>Upload Image</Button>
				</Grid>
				<Grid item>
					<FormControl variant='outlined'>
						<InputLabel htmlFor='outlined-age-native-simple'>
							Categories
						</InputLabel>
						<Select
							native
							// value={state.age}
							// onChange={handleChange}
							label='Age'
							inputProps={{
								name: 'age',
								id: 'outlined-age-native-simple',
							}}
						>
							<option aria-label='None' value='' />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default CreatePost;
