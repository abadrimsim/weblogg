import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
	Button,
	Collapse,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	CardMedia,
} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import ContactDialog from '../Contact/Contact';

import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	const year = new Date().getFullYear();

	const [openCategories, setOpenCategories] = useState(false);
	const [categories, setCategories] = useState([]);

	const [openContactDialog, setOpenContactDialog] = useState(false);

	const url = 'http://localhost:5000/api/category';

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await axios.get(url);
			setCategories(res.data);
		} catch (error) {
			console.log({ error: error });
		}
	};

	const handleClickCategories = () => {
		setOpenCategories(!openCategories);
	};

	const handleClickContact = () => {
		setOpenContactDialog(true);
	};

	const handleCloseContact = () => {
		setOpenContactDialog(false);
	};

	return (
		<Drawer classes={{ paper: classes.drawer }} variant='permanent'>
			<Typography className={classes.header}>WEBLOGG</Typography>

			<List>
				<ListItem button className={classes.menuItem} component={Link} to='/'>
					<HomeOutlinedIcon className={classes.icon} />
					<ListItemText primary='Home' />
				</ListItem>

				<ListItem
					button
					className={classes.menuItem}
					onClick={handleClickCategories}
				>
					<CategoryOutlinedIcon className={classes.icon} />
					<ListItemText primary='Categories' />
					{openCategories ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
				</ListItem>

				<Collapse in={openCategories} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{categories.map((category) => (
							<ListItem button className={classes.submenu}>
								<ListItemText primary={category.category} />
							</ListItem>
						))}
					</List>
				</Collapse>

				<ListItem
					button
					className={classes.menuItem}
					component={Link}
					to='/post'
				>
					<PersonOutlineOutlinedIcon className={classes.icon} />
					<ListItemText primary='My Posts' />
				</ListItem>

				<Divider className={classes.divider} />

				<ListItem
					button
					className={classes.menuItem}
					component={Link}
					to='/about'
				>
					<InfoOutlinedIcon className={classes.icon} />
					<ListItemText primary='About' />
				</ListItem>

				<ListItem
					button
					className={classes.menuItem}
					component={Link}
					onClick={handleClickContact}
				>
					<MailOutlinedIcon className={classes.icon} />
					<ListItemText primary='Contact' />
					<ContactDialog
						openContactDialog={openContactDialog}
						handleCloseContact={handleCloseContact}
					/>
				</ListItem>
			</List>

			<CardMedia
				className={classes.navbarImage}
				image='https://i.ibb.co/bLfzPfC/user-account.png'
				title='Create Account'
			/>

			<Typography variant='body1' className={classes.subtitle}>
				Write and share your blog today!
			</Typography>

			<Button className={classes.button} component={Link} to='/login'>
				Get Started!
			</Button>

			<Typography
				className={classes.customFooter}
				variant='body2'
				align='center'
			>
				&copy; {year} Angel Adrimsim
			</Typography>
		</Drawer>
	);
};

export default Navbar;
