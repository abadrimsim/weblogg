import React from 'react';

import {
	Typography,
	CardMedia,
	List,
	ListItem,
	Grow,
	Divider,
} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import useStyles from './styles';

const Sidebar = () => {
	const classes = useStyles();

	return (
		<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
			<List
				component='nav'
				className={classes.root}
				aria-label='mailbox folders'
			>
				<Typography className={classes.header}>Top Trending</Typography>
				<TrendingUpIcon className={classes.icon} />
				<ListItem button className={classes.listItem}>
					<CardMedia
						component='img'
						className={classes.cardMedia}
						image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography component='h5' className={classes.title}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Jan 2, 2021
						</Typography>
					</div>
				</ListItem>
				<Divider light />
				<ListItem button className={classes.listItem}>
					<CardMedia
						component='img'
						className={classes.cardMedia}
						image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography component='h5' className={classes.title}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Jan 2, 2021
						</Typography>
					</div>
				</ListItem>
				<Divider light />
				<ListItem button className={classes.listItem}>
					<CardMedia
						component='img'
						className={classes.cardMedia}
						image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography component='h5' className={classes.title}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Jan 2, 2021
						</Typography>
					</div>
				</ListItem>
				<Divider light />
				<ListItem button className={classes.listItem}>
					<CardMedia
						component='img'
						className={classes.cardMedia}
						image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography component='h5' className={classes.title}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Jan 2, 2021
						</Typography>
					</div>
				</ListItem>
				<Divider light />
				<ListItem button className={classes.listItem}>
					<CardMedia
						component='img'
						className={classes.cardMedia}
						image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography component='h5' className={classes.title}>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Jan 2, 2021
						</Typography>
					</div>
				</ListItem>
			</List>
		</Grow>

		// <Grid container>

		// 	<Grid item>
		// 		<Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
		// 			<CardActionArea component='a' href='#'>

		// 			</CardActionArea>
		// 		</Grow>

		// 	</Grid>
		// </Grid>
	);
};

export default Sidebar;
