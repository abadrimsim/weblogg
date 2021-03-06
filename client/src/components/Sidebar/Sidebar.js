import React from 'react';

import {
	Typography,
	CardMedia,
	List,
	ListItem,
	Container,
} from '@material-ui/core';

import useStyles from './styles';

const Sidebar = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography
				variant='body1'
				component='p'
				className={classes.sectionHeader}
			>
				Top Trending
			</Typography>
			<List component='nav' aria-label='Trending Posts'>
				<ListItem button className={classes.item}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography variant='subtitle2' component='p'>
							Lifestyle
						</Typography>
						<Typography variant='body1' component='p'>
							10 Reasons Why I Love Coffee
						</Typography>
					</div>
				</ListItem>

				<ListItem button className={classes.item}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://images.pexels.com/photos/5530197/pexels-photo-5530197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography variant='body1' component='p'>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle2' component='p'>
							Lifestyle
						</Typography>
					</div>
				</ListItem>

				<ListItem button className={classes.item}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography variant='body1' component='p'>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle2' component='p'>
							Lifestyle
						</Typography>
					</div>
				</ListItem>

				<ListItem button className={classes.item}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://images.pexels.com/photos/5530197/pexels-photo-5530197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography variant='body1' component='p'>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle2' component='p'>
							Technology
						</Typography>
					</div>
				</ListItem>

				<ListItem button className={classes.item}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://images.pexels.com/photos/5530197/pexels-photo-5530197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						// title={post.imageTitle}
						title='10 Reasons Why I Love Coffee'
					/>
					<div>
						<Typography variant='body1' component='p'>
							10 Reasons Why I Love Coffee
						</Typography>
						<Typography variant='subtitle2' component='p'>
							Lifestyle
						</Typography>
					</div>
				</ListItem>
			</List>
		</Container>

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
