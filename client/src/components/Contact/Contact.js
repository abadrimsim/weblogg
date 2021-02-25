import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	InputLabel,
	Input,
} from '@material-ui/core';

import useStyles from './styles';

const ContactDialog = ({ openContactDialog, handleCloseContact }) => {
	const classes = useStyles();

	return (
		<div>
			<Dialog
				open={openContactDialog}
				onClose={handleCloseContact}
				aria-labelledby='form-dialog-title'
				maxWidth='xs'
			>
				<DialogTitle id='form-dialog-title' className={classes.dialogTitle}>
					We’d love to hear from you!
				</DialogTitle>
				<DialogContent className={classes.dialogContent}>
					<DialogContentText>
						Please feel free to get in touch using the form below. We’d love to
						hear your thoughts and answer any questions you may have!
					</DialogContentText>

					<FormControl className={classes.formControl}>
						<InputLabel className={classes.labelRoot} htmlFor='fullname'>
							Full Name
						</InputLabel>
						<Input
							id='fullname'
							aria-describedby='full name'
							autoFocus
							classes={{
								input: classes.input,
								underline: classes.underline,
							}}
						/>
					</FormControl>

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

					<FormControl className={classes.formControl}>
						<InputLabel className={classes.labelRoot} htmlFor='message'>
							Message
						</InputLabel>
						<Input
							id='message'
							aria-describedby='message'
							multiline
							classes={{
								input: classes.input,
								underline: classes.underline,
							}}
						/>
					</FormControl>
				</DialogContent>

				<DialogActions className={classes.dialogActions}>
					<Button onClick={handleCloseContact} className={classes.buttonCancel}>
						Cancel
					</Button>
					<Button onClick={handleCloseContact} className={classes.buttonSend}>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ContactDialog;
