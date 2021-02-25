import React from 'react';
import {
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Grid,
	List,
	ListItemText,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import useStyles from './styles';

import {
	GitHub,
	AccountCircle,
	MenuOutlined,
	AddCircleOutlineOutlined,
	SearchOutlined,
	ExpandMore,
} from '@material-ui/icons';

const About = () => {
	const classes = useStyles();

	const handleClickGithub = () => {
		window.open('https://github.com/abadrimsim/weblogg', '_blank');
	};

	return (
		<Grid container direction='column' className={classes.container}>
			<Grid item className={classes.header}>
				<Typography className={classes.h1} variant='h1'>
					WEBLOGG
				</Typography>
				<Typography className={classes.h2} variant='h2'>
					Express yourself and share your passions. Start your journey today!
				</Typography>
				<Button
					className={classes.buttonRegister}
					component={Link}
					to='/register'
				>
					<AccountCircle className={classes.icon} /> Create Account
				</Button>
				<Button className={classes.buttonGithub} onClick={handleClickGithub}>
					<GitHub className={classes.icon} /> View on GitHub
				</Button>
			</Grid>
			<Grid
				container
				direction='row'
				className={classes.featureContainer}
				spacing={10}
			>
				<Grid item className={classes.feature}>
					<MenuOutlined className={classes.featureIcon} />
					<Typography variant='h5'>Easy-to-Navigate Menu</Typography>
					<Typography variant='body2'>
						Simple yet functional. Quickly navigate through each blog content.
					</Typography>
				</Grid>
				<Grid item className={classes.feature}>
					<AddCircleOutlineOutlined className={classes.featureIcon} />
					<Typography variant='h5'>Create and Update Posts</Typography>
					<Typography variant='body2'>
						Share your knowledge with people across the globe! Upload photos or
						embed other multimedia and make it more engaging.
					</Typography>
				</Grid>
				<Grid item className={classes.feature}>
					<SearchOutlined className={classes.featureIcon} />
					<Typography variant='h5'>
						View All Posts or Filter by Category
					</Typography>
					<Typography variant='body2'>
						Content are divided into categories. Read topics which interests you
						the most!
					</Typography>
				</Grid>
			</Grid>
			<Grid item className={classes.accordionContainer}>
				<Typography variant='h5'>FAQ</Typography>
				<Accordion className={classes.customAccordion}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='body1'>
							What technology stack is used for Weblogg?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant='body2'>
							The MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack is used for
							this website.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion className={classes.customAccordion}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='body1'>
							What Front-end Technologies are used for this project?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List variant='body2'>
							<ListItemText>
								• ReactJS: JavaScript library which is used for building user
								interfaces specifically for single page applications and
								handling view layer for web and mobile apps.
							</ListItemText>

							<ListItemText>
								• Material-UI: One of the world's most popular React UI
								libraries used for faster and easier web development.
							</ListItemText>

							<ListItemText>
								• axios: A popular JavaScript library designed to handle HTTP
								requests in the browser and Node.js ecosystem.
							</ListItemText>

							<ListItemText>
								• dateFormat: A node.js package for Steven Levithan's excellent
								dateFormat() function.
							</ListItemText>

							<ListItemText>
								• history: The history library lets you easily manage session
								history anywhere JavaScript runs. A history object abstracts
								away the differences in various environments and provides a
								minimal API that lets you manage the history stack, navigate,
								and persist state between sessions.
							</ListItemText>

							<ListItemText>
								• react-router-dom: DOM bindings for React Router.
							</ListItemText>
						</List>
					</AccordionDetails>
				</Accordion>

				<Accordion className={classes.customAccordion}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='body1'>
							What Back-end Technologies are used for this project?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List variant='body2'>
							<ListItemText>
								• NodeJS: JavaScript library which is used for building user
								interfaces specifically for single page applications and
								handling view layer for web and mobile apps.
							</ListItemText>

							<ListItemText>
								• ExpressJS: One of the world's most popular React UI libraries
								used for faster and easier web development.
							</ListItemText>

							<ListItemText>
								• mongoose: A popular JavaScript library designed to handle HTTP
								requests in the browser and Node.js ecosystem.
							</ListItemText>

							<ListItemText>
								• bcryptjs: A node.js package for Steven Levithan's excellent
								dateFormat() function.
							</ListItemText>

							<ListItemText>
								• cors: The history library lets you easily manage session
								history anywhere JavaScript runs. A history object abstracts
								away the differences in various environments and provides a
								minimal API that lets you manage the history stack, navigate,
								and persist state between sessions.
							</ListItemText>

							<ListItemText>
								• dotenv: DOM bindings for React Router.
							</ListItemText>

							<ListItemText>
								• jsonwebtoken: DOM bindings for React Router.
							</ListItemText>

							<ListItemText>
								• slugify: DOM bindings for React Router.
							</ListItemText>
						</List>
					</AccordionDetails>
				</Accordion>

				<Accordion className={classes.customAccordion}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='body1'>What database is used?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant='body2'>MongoDB</Typography>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	);
};

export default About;
