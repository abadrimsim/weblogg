import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		margin: '1.5rem auto',
		maxWidth: '45vw',
	},
	header: {
		fontSize: '1rem',
		fontWeight: '600',
		color: '#875CC0',
		textTransform: 'uppercase',
	},
});

export default useStyles;
