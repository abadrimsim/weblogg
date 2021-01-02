import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
	Button,
	Collapse,
	Drawer,
	Grow,
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

import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [categories, setCategories] = useState([]);

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

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Drawer classes={{ paper: classes.drawer }} variant='permanent'>
			<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
				<Typography className={classes.header}>WEBLOGG</Typography>
			</Grow>

			<Divider className={classes.divider} />

			<List>
				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }}>
					<ListItem button className={classes.menuItem} component={Link} to='/'>
						<HomeOutlinedIcon className={classes.icon} fontSize='inherit' />
						<ListItemText primary='Home' />
					</ListItem>
				</Grow>

				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 3000 }}>
					<ListItem button className={classes.menuItem} onClick={handleClick}>
						<CategoryOutlinedIcon className={classes.icon} fontSize='inherit' />
						<ListItemText primary='Categories' />
						{open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
					</ListItem>
				</Grow>

				<Collapse in={open} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{categories.map((category) => (
							<ListItem button className={classes.submenu}>
								<ListItemText primary={category.category} />
							</ListItem>
						))}
					</List>
				</Collapse>

				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 4000 }}>
					<ListItem
						button
						className={classes.menuItem}
						component={Link}
						to='/about'
					>
						<InfoOutlinedIcon className={classes.icon} fontSize='inherit' />
						<ListItemText primary='About' />
					</ListItem>
				</Grow>

				<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 5000 }}>
					<ListItem
						button
						className={classes.menuItem}
						component={Link}
						to='/contact'
					>
						<MailOutlinedIcon className={classes.icon} fontSize='inherit' />
						<ListItemText primary='Contact' />
					</ListItem>
				</Grow>
			</List>

			<Grow in {...{ timeout: 4000 }}>
				<CardMedia
					className={classes.navbarImage}
					image='https://i.ibb.co/bLfzPfC/user-account.png'
					title='Create Account'
				/>
			</Grow>

			<Grow in {...{ timeout: 4000 }} className={classes.subtitle}>
				<Typography variant='body1'>
					Write and share your blog today!
				</Typography>
			</Grow>

			<Grow in {...{ timeout: 4000 }}>
				<Button className={classes.button} component={Link} to='/login'>
					Get Started!
				</Button>
			</Grow>
		</Drawer>
	);
};

export default Navbar;
