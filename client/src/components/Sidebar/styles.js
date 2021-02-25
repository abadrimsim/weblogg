import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		boxShadow: '0 3px 10px 5px #E8EDF4',
		padding: '1.25rem',
		margin: '5.5rem 4rem 0 0',
		width: '65%',
	},
	listItem: {
		padding: '0.75rem',
	},
	header: {
		fontSize: '1.25rem',
		fontWeight: 600,
		color: '#272625',
		marginBottom: '1rem',
		display: 'inline-block',
	},
	icon: {
		display: 'inline-block',

		marginLeft: '0.25rem',
		color: '#875CC0',
	},
	cardMedia: {
		width: '5rem',
		borderRadius: 10,
		marginRight: '1rem',
	},
	title: {
		fontSize: '0.8rem',
		fontWeight: 600,
		lineHeight: '1rem',
	},
	subtitle: {
		fontSize: '0.75rem',
		color: '#78828C',
	},
});

export default useStyles;
