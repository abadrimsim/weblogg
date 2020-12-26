import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {
	Collapse,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import useStyles from './styles';

const Navigator = () => {
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
			<div>
				<List>
					<ListItem button component={Link} to='/'>
						<ListItemText className={classes.categoryHeader} primary='Home' />
					</ListItem>
					<ListItem button component={Link} to='/about'>
						<ListItemText className={classes.categoryHeader} primary='About' />
					</ListItem>
					<ListItem button component={Link} to='/contact'>
						<ListItemText
							className={classes.categoryHeader}
							primary='Contact'
						/>
					</ListItem>
					<ListItem
						button
						className={classes.categoryHeader}
						onClick={handleClick}
					>
						<ListItemText primary='Categories' />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							{categories.map((category) => (
								<ListItem button className={classes.categoryHeader}>
									<ListItemText primary={category.category} />
								</ListItem>
							))}
						</List>
					</Collapse>
				</List>
			</div>
		</Drawer>
	);
};

export default Navigator;
