import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	drawer: {
		color: '#989EAA',
		backgroundColor: '#161C25',
		width: '20vw',
		padding: '5rem 0 2rem',
		border: 'none',
	},
	header: {
		padding: '0 4rem',
		fontSize: '1.2rem',
		fontWeight: '600',
		color: '#875CC0',
	},
	divider: {
		margin: '2rem 0',
		backgroundColor: '#222A36',
		height: '2px',
	},
	menuItem: {
		padding: '0.5rem 4rem',
		'&:hover,&:focus': {
			backgroundColor: '#3B4148',
		},
	},
	icon: {
		marginRight: '0.5rem',
	},
	submenu: {
		padding: '0.5rem 3rem 0.5rem 5.5rem',
		'&:hover,&:focus': {
			backgroundColor: '#3B4148',
		},
	},
	navbarImage: {
		margin: '8rem 4rem 0',
		height: '100%',
		backgroundSize: 'contain',
	},
	subtitle: {
		margin: '0 4rem 1rem',
		textAlign: 'center',
	},
	button: {
		background: 'linear-gradient(45deg, #6E60D9 40%, #4AB5E3 90%)',
		border: 0,
		borderRadius: 10,
		color: 'white',
		fontSize: '0.9rem',
		padding: '0.5rem',
		textTransform: 'capitalize',
		margin: '0 4rem 2rem',
		'&:hover,&:focus': {
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
}));

export default useStyles;
