import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		maxWidth: 250,
		boxShadow: 'none',
		margin: '1rem',
	},
	media: {
		height: 180,
		borderRadius: 10,
	},
	content: {
		padding: '0.5rem 0',
	},
});

export default useStyles;
