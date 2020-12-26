import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		margin: '5rem 15rem',
		borderRadius: 0,
		boxShadow: 'none',
	},
	cardHeader: {
		textAlign: 'center',
		marginBottom: '1rem',
	},
	category: {
		textAlign: 'center',
		marginTop: '1rem',
	},
	media: {
		height: '30rem',
	},
	body: {
		color: '#33333',
		lineHeight: '1.5rem',
		textAlign: 'justify',
		marginBottom: '1rem',
	},
	button: {
		color: '#ffffff',
		backgroundColor: '#d3c4a6',
		borderRadius: 0,
		padding: '0.5rem 0.8rem',
		'&:hover,&:focus': {
			backgroundColor: '#bba579',
		},
	},
	cardActions: {
		justifyContent: 'center',
		marginBottom: '2.5rem',
	},
});

export default useStyles;
