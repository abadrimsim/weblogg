import React from 'react';
import { Avatar, IconButton, Divider, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import useStyles from './styles';

const UserAvatar = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container className={classes.root}>
				<Grid item sm={10} />
				<Grid item sm={1}>
					<IconButton
						color='primary'
						aria-label='toggle light/dark theme'
						component='span'
					>
						<Brightness7Icon />
					</IconButton>
				</Grid>
				<Grid item sm={1}>
					<Avatar>
						<AccountCircleIcon />
					</Avatar>
				</Grid>
			</Grid>
			<Divider />
		</>
	);
};

export default UserAvatar;
