import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		padding: '0 15vh 5rem 10vh',
	},
	header: {
		backgroundImage: `url(${'https://i.ibb.co/ZHFS93L/about.png'})`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		height: '60vh',
		textAlign: 'left',
		padding: '8rem 7rem',
	},
	featureContainer: {
		justifyContent: 'center',
		textAlign: 'center',
		margin: '3rem 0',
	},
	accordionContainer: {
		color: '#161C25',
		margin: '0 10vw 5vh',
	},
	h1: {
		color: '#875CC0',
	},
	h2: {
		fontWeight: '400',
		margin: '2rem 0 5rem',
		width: '50%',
	},
	buttonGithub: {
		background: 'transparent',
		textTransform: 'capitalize',
		border: 'solid',
		borderWidth: '1.75px',
		borderRadius: 12,
		color: '#867BDD',
		fontSize: '0.9rem',
		margin: '1rem 0.3rem 2rem',
		width: '10rem',
		padding: '0.3rem 0',
		'&:hover,&:focus': {
			color: '#6E60D9',
			background: 'transparent',
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
	buttonRegister: {
		background: 'linear-gradient(45deg, #6E60D9 40%, #4AB5E3 90%)',
		textTransform: 'capitalize',
		border: 0,
		borderRadius: 12,
		color: '#FFF',
		fontSize: '0.9rem',
		margin: '1rem 0.3rem 2rem',
		width: '10rem',
		'&:hover,&:focus': {
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
	icon: {
		marginRight: '0.25rem',
		fontSize: 'inherit',
	},
	featureIcon: {
		textAlign: 'center',
		fontSize: '3rem',
		color: '#FFF',
		background: '#161C25',
		padding: '1.25rem',
		borderRadius: 50,
		marginBottom: '1rem',
	},
	feature: {
		width: '20vw',
	},
	customAccordion: {
		background: 'transparent',
	},
	body2: {
		display: 'block',
	},
});

export default useStyles;
