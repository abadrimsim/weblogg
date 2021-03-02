import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	drawer: {
		color: '#989EAA',
		backgroundColor: '#161C25',
		padding: '2rem 0',
		border: 'none',
	},
	header: {
		padding: '0 2rem 1.5rem',
		fontSize: '1.2rem',
		fontWeight: '600',
		color: '#875CC0',
	},
	divider: {
		margin: '0.75rem 0',
		backgroundColor: '#3B4148',
	},
	menuItem: {
		padding: '0.5rem 2rem',
		'&:hover,&:focus': {
			backgroundColor: '#3B4148',
		},
	},
	icon: {
		marginRight: '1rem',
		fontSize: 'inherit',
	},
	submenu: {
		padding: '0.5rem 4rem',
		'&:hover,&:focus': {
			backgroundColor: '#3B4148',
		},
	},
	navbarImage: {
		margin: '20rem 2rem 0',
		height: '10vw',
		backgroundSize: 'contain',
	},
	subtitle: {
		margin: '0 2rem 1rem',
		textAlign: 'center',
	},
	button: {
		background: 'linear-gradient(45deg, #6E60D9 40%, #4AB5E3 90%)',
		border: 0,
		borderRadius: 12,
		color: 'white',
		fontSize: '0.9rem',
		padding: '0.5rem',
		textTransform: 'capitalize',
		margin: '0 3rem 3rem',
		'&:hover,&:focus': {
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
	customFooter: {
		color: '#5B616E',
		fontSize: '0.8rem',
		margin: '0 2rem',
	},
}));

export default useStyles;
